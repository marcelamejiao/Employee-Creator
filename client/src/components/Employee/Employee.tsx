import { deleteEmployee } from "../../services/employees";

const Employee = ({ employee, added, setAdded }) => {
	const { firstName, lastName, contractType, emailAddress, id } = employee;

	const handleClick = async () => {
		try {
				await deleteEmployee(id);
				console.log("deleted");
				setAdded(added + 1);
		} catch (e) {
				console.log(e.message);
		}
};

	return(
		<div>
			<h4>{firstName} {lastName}</h4>
			<p>{contractType}</p>
			<p>{emailAddress}</p>
			<div>
				<button onClick={handleClick}>Remove</button>
			</div>
		</div>
	)
}

export default Employee;