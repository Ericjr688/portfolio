import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./Components/NavBar"
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';

function App() {
  
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;

