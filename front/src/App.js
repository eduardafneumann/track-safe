// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Ocorridos from './Ocorridos/ocorridos';
import CriarOcorrido from './CriarOcorrido/criarOcorrido';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ocorridos" element={<Ocorridos />} />
        <Route path="/criar-ocorrido" element={<CriarOcorrido />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
