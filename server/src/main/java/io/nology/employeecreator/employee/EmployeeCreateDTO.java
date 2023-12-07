package io.nology.employeecreator.employee;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import java.text.ParseException;
import java.time.OffsetDateTime;

@Getter
@Setter
public class EmployeeCreateDTO {

	@NotBlank
	private String firstName;

	@NotBlank
	private String lastName;

	private String middleName;

	@NotBlank
	private String emailAddress;

	private int mobileNumber;

	@NotBlank
	private String address;

	@NotBlank
	private String contractType;

	private OffsetDateTime startDate;

	private OffsetDateTime finishDate;

	@NotBlank
	private String contractBasis;

	private float hoursPerWeek;

	public EmployeeCreateDTO(String firstName,
							 String lastName,
							 String middleName,
							 String emailAddress,
							 int mobileNumber,
							 String address,
							 String contractType,
							 String startDate,
							 String finishDate,
							 String contractBasis,
							 float hoursPerWeek) throws ParseException {
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
