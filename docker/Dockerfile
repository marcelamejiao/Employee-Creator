FROM maven:3-eclipse-temurin-21 as base

FROM node:18 as frontend-builder

ARG VITE_API_HOST=/api
ENV VITE_API_HOST=${VITE_API_HOST}

ADD client /client

WORKDIR /client

# Build the frontend static assets /client/dist
RUN npm ci \
    # TODO: Build without Type Checking for now
#    && npm run build \
    && npm run build:without-type-check

FROM base as java-builder

ADD server /server

# Build the Backend executable /server/target/server.jar
RUN unset MAVEN_CONFIG \
    && cd /server \
    && chmod +x mvnw \
    # TODO: Build without running tests for now
#    && ./mvnw clean package \
    && ./mvnw clean package -Dmaven.test.skip

FROM base as app

# Install dependencies
RUN apt-get update \
        && \
        apt-get install -y \
          supervisor \
          nginx \
        && \
        apt-get clean

WORKDIR /app

# Add nginx configuration
RUN rm /etc/nginx/sites-enabled/* /etc/nginx/sites-available/*
ADD docker/nginx/sites-enabled /etc/nginx/sites-enabled/
ADD docker/nginx/nginx.conf /etc/nginx/nginx.conf

# Add Supervisor configuration
RUN mkdir -p /etc/supervisor
ADD docker/supervisor/supervisord.conf /etc/supervisor
ADD docker/supervisor/app.ini /etc/supervisor/conf.d

# Add the compiled backend
COPY --from=java-builder /server/target/server.jar /app/server.jar

# Add the compiled frontend
COPY --from=frontend-builder /client/dist /app/dist

# Add the entrypoint and set it
ADD docker/entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/bin/sh", "/entrypoint.sh" ]