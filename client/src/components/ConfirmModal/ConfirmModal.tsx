import styles from "./ConfirmModal.module.scss"

type confirmModalProps = {
	handleRemove(): void,
	setShowModal(): void,
};

export const ConfirmModal = ({ handleRemove, setShowModal}: confirmModalProps) => {

	return (
		<div className={styles.box}>
			<div className={styles.container}>
				<h2>Are you sure you want to delete this employee?</h2>
				<div className={styles.actions}>
					<button className={styles.buttons} onClick={handleRemove}>Yes</button>
					<button className={styles.buttons} onClick={setShowModal}>Cancel</button>
				</div>
			</div>
		</div>
	)
}