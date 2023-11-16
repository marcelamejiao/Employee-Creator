export const getAllEmployees = async () => {
    const response = await fetch("http://localhost:8080/posts");
    return await response.json();
};

export const createEmployee = async (data) => {
    const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Could not create an employee");
    }
};

export const deleteEmployee = async (id) => {
    const response = await fetch(`http://localhost:8080/posts/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Could not delete an employee");
    }
};
