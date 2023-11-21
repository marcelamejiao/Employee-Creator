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
public class Employee {
	
	// here we will put everything we want to store in the db
	// for each employee
	
	@Getter
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	@Getter
	@Setter
	private String firstName;
	
	@Column
	@Getter
	@Setter
	private String lastName;
	
	@Column
	@Getter
	@Setter
	private String middleName;

	@Column
	@Getter
	@Setter
	private String emailAddress;

	@Column
	@Getter
	@Setter
	private Long mobileNumber;

	@Column
	@Getter
	@Setter
	private String address;

	@Column
	@Getter
	@Setter
	private String contractType;

	@Column
	@Getter
	@Setter
	private OffsetDateTime startDate;

	@Column
	@Getter
	@Setter
	private OffsetDateTime finishDate;

	@Column
	@Getter
	@Setter
	private String contractBasis;

	@Column
	@Getter
	@Setter
	private Long hoursPerWeek;

	public Employee() {}
	
	public Employee(String firstName,
					String lastName,
					String middleName,
					String emailAddress,
					Long mobileNumber,
					String address,
					String contractType,
					OffsetDateTime startDate,
					OffsetDateTime finishDate,
					String contractBasis,
					Long hoursPerWeek) {
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
