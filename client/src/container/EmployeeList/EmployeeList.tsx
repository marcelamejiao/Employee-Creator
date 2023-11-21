import Employee from "../../components/Employee/Employee";

export default function EmployeeList({ employees, setAdded, added }) {
	return (
		<div>
			<div>
				<h1>Employee's List</h1>
			</div>
			<div>
				{employees.length > 0 && 
					employees.map((employee) => {
						return (
							<Employee 
								employee={employee}
								key={employee.id}
								added={added}
								setAdded={setAdded}
							/>
						);
					})
				}
			</div>
		</div>
	)
} 