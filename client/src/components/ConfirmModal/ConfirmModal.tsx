import styles from "./ConfirmModal.module.scss"

type confirmModalProps = {
	handleRemove(): void,
	setShowModal(): void,
	firstName: string,
	lastName: string,
};

export const ConfirmModal = ({ handleRemove, setShowModal, firstName, lastName}: confirmModalProps) => {

	return (
		<div className={styles.box}>
			<div className={styles.container}>
				<h2>Are you sure you want to delete the employee {firstName} {lastName}?</h2>
				<div className={styles.actions}>
					<button className={styles.buttons} onClick={handleRemove}>Yes</button>
					<button className={styles.buttons} onClick={setShowModal}>Cancel</button>
				</div>
			</div>
		</div>
	)
}