// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
