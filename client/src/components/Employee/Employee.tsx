import { updateEmployee } from "../../services/employees";
import { deleteEmployee } from "../../services/employees";
import styles from "./Employee.module.scss";

const Employee = ({ employee, added, setAdded }) => {
	const { firstName, lastName, contractType, emailAddress, id } = employee;

	const handleEdit = async () => {
		try {
				await updateEmployee(employee);
				console.log("updated");
		} catch (e) {
				console.log(e.message);
			}
	};

	const handleRemove = async () => {
		try {
				await deleteEmployee(id);
				console.log("deleted");
				setAdded(added + 1);
		} catch (e) {
				console.log(e.message);
			}
	};

	return(
		<div className={styles.container}>
			<div className={styles.content}>
				<h4 className={styles.fullname}>{firstName} {lastName}</h4>
				<p>{contractType}</p>
				<p>{emailAddress}</p>
			</div>
			<div className={styles.buttons}>
				<button className={styles.button} onClick={handleEdit}>Edit</button>
				<button className={styles.button} onClick={handleRemove}>Remove</button>
			</div>
		</div>
	)
}

export default Employee;