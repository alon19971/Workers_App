import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { EmployeeProvider } from './context/EmployeeContext';

const App = () => {
  return (
    <EmployeeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <NavBar />
          <div className="container mx-auto p-4">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
      </Router>
    </EmployeeProvider>
  );
};

export default App;
