const Employee = ({ employee, added, setAdded }) => {
	const { firstName, lastName, contractType, emailAddress } = employee;

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