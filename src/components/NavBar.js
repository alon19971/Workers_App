import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Employee App</div>
        <div className="flex-grow flex justify-center space-x-4">
          <NavLink
            exact
            to="/"
            className="text-white hover:text-gray-300"
            activeClassName="border-b-2 border-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className="text-white hover:text-gray-300"
            activeClassName="border-b-2 border-white"
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
