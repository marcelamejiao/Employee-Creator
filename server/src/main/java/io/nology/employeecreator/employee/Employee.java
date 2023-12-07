package io.nology.employeecreator.employee;

import java.time.OffsetDateTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "employees")
@Getter
@Setter
public class Employee {
	
	// here we will put everything we want to store in the db
	// for each employee

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	private String middleName;

	@Column
	private String emailAddress;

	@Column
	private int mobileNumber;

	@Column
	private String address;

	@Column
	private String contractType;

	@Column
	private OffsetDateTime startDate;

	@Column
	private OffsetDateTime finishDate;

	@Column
	private String contractBasis;

	@Column
	private float hoursPerWeek;

	public Employee() {}
	
	public Employee(String firstName,
					String lastName,
					String middleName,
					String emailAddress,
					int mobileNumber,
					String address,
					String contractType,
					OffsetDateTime startDate,
					OffsetDateTime finishDate,
					String contractBasis,
					float hoursPerWeek) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.middleName = middleName;
		this.emailAddress = emailAddress;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.contractType = contractType;
		this.startDate = startDate;
		this.finishDate = finishDate;
		this.contractBasis = contractBasis;
		this.hoursPerWeek = hoursPerWeek;
	}

}
// hibernate
