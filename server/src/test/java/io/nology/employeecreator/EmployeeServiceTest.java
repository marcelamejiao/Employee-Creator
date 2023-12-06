package io.nology.employeecreator;


import io.nology.employeecreator.employee.EmployeeRepository;
import io.nology.employeecreator.employee.EmployeeService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {

    @Mock
    private EmployeeRepository employeeRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private EmployeeService underTest;

    @Test
    void getAll_ReturnsAllData(){
        underTest.getAll();
        Mockito.verify(employeeRepository).findAll();
    }



}
