package io.nology.employeecreator.employee;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
	
	// give my service access to the repository layer
	// dependency injection
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public List<Employee> getAll() {
		return this.employeeRepository.findAll();
	}
	
	public Employee createEmployee(EmployeeCreateDTO data) {
		Employee newEmployee = modelMapper.map(data, Employee.class);
		Employee created = this.employeeRepository.save(newEmployee);
		
		return created;
	}
	
	public Optional<Employee> getById(Long id) {
		Optional<Employee> foundEmployee = employeeRepository.findById(id);
		return foundEmployee;
	}
	
	public boolean deleteById(Long id) {
		// check if what I want to delete exists
		Optional<Employee> foundEmployee = this.employeeRepository.findById(id);
		// if it exists call some repository method that deletes it
		// return true, so it's easy to handle in the controller
		if(foundEmployee.isPresent()) {
			this.employeeRepository.delete(foundEmployee.get());
			return true;
		}

		// if it doesn't exist, return false
		return false;
	}
	
	public Optional<Employee> updateById(Long id, EmployeeUpdateDTO data) {
		// Try to find the employee
		Optional<Employee> foundEmployee = this.getById(id);

		// If we didn't find it, return the optional employee
		if (! foundEmployee.isPresent()) {
			return foundEmployee;
		}

		// Otherwise, update it!
		Employee toUpdate = foundEmployee.get();

		modelMapper.map(data, toUpdate);

		Employee updatedEmployee = this.employeeRepository.save(toUpdate);

		return Optional.of(updatedEmployee);
	}
}
