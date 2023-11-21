export const getAllEmployees = async () => {
    const response = await fetch("http://localhost:8080/employees");
    return await response.json();
};

export const createEmployee = async (data) => {
    const response = await fetch("http://localhost:8080/employees", {
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
    const response = await fetch(`http://localhost:8080/employees/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Could not delete an employee");
    }
};

export const updateEmployee = async (id, data) => {
    const response =  await fetch(`http://localhost:8080/employees/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Could not update this employee");
    }

}
