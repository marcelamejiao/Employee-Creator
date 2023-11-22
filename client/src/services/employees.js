// Load the API host from the environment if it exists
const apiHost = import.meta.env.VITE_API_HOST ?? 'http://localhost:8080';

export const getAllEmployees = async () => {
    const response = await fetch(`${apiHost}/employees`);
    return await response.json();
};

export const getEmployeeById = async (id) => {
    const response = await fetch(`${apiHost}/employees/${id}`);
    return await response.json();
};

export const createEmployee = async (data) => {
    const response = await fetch(`${apiHost}/employees`, {
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
    const response = await fetch(`${apiHost}/employees/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Could not delete an employee");
    }
};

export const updateEmployee = async (id, data) => {
    const response =  await fetch(`${apiHost}/employees/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Could not update this employee");
    }

}
