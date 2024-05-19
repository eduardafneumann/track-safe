// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Ocorridos from './Ocorridos/ocorridos';
import NovoOcorrido from './NovoOcorrido/novo-ocorrido';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ocorrencias" element={<Ocorridos />} />
        <Route path="/novo-ocorrido" element={<NovoOcorrido />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
