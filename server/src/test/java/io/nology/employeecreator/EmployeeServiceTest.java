package io.nology.employeecreator;
import io.nology.employeecreator.employee.Employee;
import io.nology.employeecreator.employee.EmployeeCreateDTO;
import io.nology.employeecreator.employee.EmployeeRepository;
import io.nology.employeecreator.employee.EmployeeService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import java.text.ParseException;
import java.time.OffsetDateTime;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {

    @Mock
    private EmployeeRepository employeeRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private EmployeeService underTest;

    @Test
    void getAll_ReturnsAllData() {
        underTest.getAll();
        Mockito.verify(employeeRepository).findAll();
    }

    @Test
    void createSuburb_ValidSuburb_AddsSuburbsToDB() throws ParseException {

        // Create a DTO
        EmployeeCreateDTO dto = new EmployeeCreateDTO(
                "Marcela",
                "Mejia",
                "Wendy",
                "mejia@test.com",
                045034076,
                "17 some street",
                "permanent",
                "2013-04-10T14:00:00.000Z",
                "2013-04-10T14:00:00.000Z",
                "fulltime",
                32
        );

        // Create an employee
        Employee employee = new Employee (
            "Marcela",
            "Mejia",
            "Wendy",
            "mejia@test.com",
            450340769,
            "17 some street",
            "permanent",
                OffsetDateTime.parse("2021-01-01T00:00:00+00:00"),
                OffsetDateTime.parse("2021-01-01T00:00:00+00:00"),
            "fulltime",
            32
        );

        // Mock mapper
        BDDMockito.given(modelMapper.map(dto, Employee.class)).willReturn(employee);

        this.underTest.createEmployee(dto);

        //check that the repository method was called with the correct argument
        ArgumentCaptor<Employee> employeeArgument = ArgumentCaptor.forClass(Employee.class);

        Mockito.verify(employeeRepository).save(employeeArgument.capture());

        // check if what save was called with is the same as my employee
        assertEquals(employee, employeeArgument.getValue());
    }
}