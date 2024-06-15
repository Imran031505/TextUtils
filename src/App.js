import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
  };

  const appStyle = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    minHeight: '100vh',
};

  return (
    
      <>
      <BrowserRouter>
      <div style={appStyle}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container my-3">
          <Routes>
            <Route darkMode={darkMode} path="/" element={<TextForm />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        </div>
        </BrowserRouter>
      </>
    
  );
}

export default App;
