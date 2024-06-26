import React, { useState } from 'react';
import EmployeeDetails from './EmployeeDetails';
import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeList = ({ employees }) => {
  const { addToFavorites, favorites, removeFromFavorites } = useContext(EmployeeContext);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const isFavorite = (employee) => {
    return favorites.some((fav) => fav.id === employee.id);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {employees.map((employee) => (
        <div key={employee.id} className="card p-4 bg-white border rounded shadow">
          <img src={employee.picture} alt={employee.name} className="w-24 h-24 mx-auto rounded-full" />
          <p className="text-lg font-semibold text-center">{employee.name}</p>
          <p className="text-center"><strong>Age:</strong> {employee.age}</p>
          <p className="text-center"><strong>Location:</strong> {employee.location.city}, {employee.location.country}</p>
          <button
            onClick={() => setSelectedEmployeeId(selectedEmployeeId === employee.id ? null : employee.id)}
            className="view-details w-full px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {selectedEmployeeId === employee.id ? "Hide Details" : "View Details"}
          </button>
          {isFavorite(employee) ? (
            <button
              onClick={() => removeFromFavorites(employee.id)}
              className="remove-favorite w-full px-4 py-2 mt-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove from Favorites
            </button>
          ) : (
            <button
              onClick={() => addToFavorites(employee)}
              className="add-favorite w-full px-4 py-2 mt-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save to Favorites
            </button>
          )}
          {selectedEmployeeId === employee.id && <EmployeeDetails employee={employee} />}
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
