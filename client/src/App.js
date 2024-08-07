import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Gallery from './components/Gallery';
import Departments from './components/Departments';
import Teachers from './components/Teachers';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <h1>Our Educational Organization</h1>
        </header>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/teachers">Teachers</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/teachers" element={<Teachers />} />
          </Routes>
        </div>
        <footer className="footer">
          <p>&copy; 2024 Our Educational Organization</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
