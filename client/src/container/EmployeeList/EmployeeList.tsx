import Employee from "../../components/Employee/Employee";
import styles from "./EmployeeList.module.scss";

export default function EmployeeList({ employees, setAdded, added }) {
	return (
		<div>
			<div className={styles.title}>
				<h1>Employee's List</h1>
			</div>
			<div className={styles.content}>
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