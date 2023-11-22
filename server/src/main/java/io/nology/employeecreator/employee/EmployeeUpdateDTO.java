package io.nology.employeecreator.employee;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.text.ParseException;
import java.time.OffsetDateTime;

public class EmployeeUpdateDTO {

	@Getter
	@Setter
	@NotBlank
	private String firstName;

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
	private OffsetDateTime startDate;

	@Getter
	@Setter
	private OffsetDateTime finishDate;

	@Getter
	@Setter
	@NotBlank
	private String contractBasis;

	@Getter
	@Setter
	private Long hoursPerWeek;


	public EmployeeUpdateDTO(String firstName,
							 String lastName,
							 String middleName,
							 String emailAddress,
							 Long mobileNumber,
							 String address,
							 String contractType,
							 String startDate,
							 String finishDate,
							 String contractBasis,
							 Long hoursPerWeek) throws ParseException {
		this.firstName = firstName;
		this.lastName = lastName;
		this.middleName = middleName;
		this.emailAddress = emailAddress;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.contractType = contractType;
		this.startDate = OffsetDateTime.parse(startDate);
		this.finishDate = OffsetDateTime.parse(finishDate);
		this.contractBasis = contractBasis;
		this.hoursPerWeek = hoursPerWeek;
	}

}
