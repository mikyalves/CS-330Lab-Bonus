import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Launch from './Launch';
import Home from './Home';
import Navbar from './Navbar';
import Card from './Card';
import Contact from './Contact';

function App() {
  return (
    <div className="App" style={{fontFamily: 'Century Schoolbook' }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Launch />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Card" element={<Card />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;