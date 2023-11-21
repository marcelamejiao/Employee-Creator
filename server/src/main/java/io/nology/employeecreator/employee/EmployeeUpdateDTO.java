package io.nology.employeecreator.employee;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class EmployeeUpdateDTO {

	@Getter
	@Setter
	@NotBlank
	private String firstName;

	@Column
	@Getter
	@Setter
	@NotBlank
	private String lastName;

	@Getter
	@Setter
	private String middleName;

	@Getter
	@Setter
	@NotBlank
	private String emailAddress;

	@Getter
	@Setter
	@NotBlank
	private Long mobileNumber;

	@Getter
	@Setter
	@NotBlank
	private String address;

	@Getter
	@Setter
	@NotBlank
	private String contractType;

	@Getter
	@Setter
	@NotBlank
	private Date startDate;

	@Getter
	@Setter
	@NotBlank
	private Date finishDate;

	@Getter
	@Setter
	@NotBlank
	private String contractBasis;

	@Getter
	@Setter
	@NotBlank
	private Byte hoursPerWeek;


	public EmployeeUpdateDTO(String firstName,
							 String lastName,
							 String middleName,
							 String emailAddress,
							 Long mobileNumber,
							 String address,
							 String contractType,
							 Date startDate,
							 Date finishDate,
							 String contractBasis,
							 Byte hoursPerWeek) {
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
