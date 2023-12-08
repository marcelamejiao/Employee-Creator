// @ts-nocheck @todo fix issues
import { deleteEmployee } from "../../services/employees";
import { ConfirmModal } from "../ConfirmModal/ConfirmModal";
import styles from "./Employee.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify';

const Employee = ({ employee, added, setAdded }) => {
	const [showModal, setShowModal] = useState(false);

	const { firstName, lastName, contractType, emailAddress, id } = employee;

	const navigate = useNavigate();

	const handleEdit = () => {
		navigate(`/employees/${id}`)
	};

	const handleRemove = async () => {
		try {
				await deleteEmployee(id);
				setAdded(added + 1);
				toast.info("You have successfully deleted an employee");
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
				<button className={styles.button} onClick={() => setShowModal(true)}>Remove</button>
			</div>
			{showModal && (			
				<ConfirmModal 
					handleRemove={handleRemove}
					setShowModal={() => setShowModal(false)}
				/>
			)}

		</div>
	)
}

export default Employee;