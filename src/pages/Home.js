import React, { useContext, useState } from 'react';
import SearchBar from '../components/SearchBar';
import EmployeeList from '../components/EmployeeList';
import EmployeeDetails from '../components/EmployeeDetails';
import { EmployeeContext } from '../context/EmployeeContext';

const Home = () => {
  const { employees, filteredEmployees, setFilteredEmployees } = useContext(EmployeeContext);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = employees.filter(employee =>
      employee.name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredEmployees(filtered);
  };

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <EmployeeList employees={filteredEmployees} onViewDetails={handleViewDetails} />
      {selectedEmployee && <EmployeeDetails employee={selectedEmployee} />}
    </div>
  );
};

export default Home;
