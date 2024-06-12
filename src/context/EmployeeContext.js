import React, { createContext, useState, useEffect } from 'react';
import { fetchEmployees } from '../services/api';
import { toast } from 'react-toastify';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
        setFilteredEmployees(data); // Initialize filtered list
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    getEmployees();
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (employee) => {
    setFavorites([...favorites, employee]);
    toast.success(`${employee.name} added to favorites!`);
  };

  const removeFromFavorites = (employeeId) => {
    setFavorites(favorites.filter((employee) => employee.id !== employeeId));
    toast.error(`Employee removed from favorites!`);
  };

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
    toast.success(`Employee ${newEmployee.name} added successfully!`);
  };

  return (
    <EmployeeContext.Provider value={{ employees, filteredEmployees, setFilteredEmployees, favorites, addToFavorites, removeFromFavorites, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
