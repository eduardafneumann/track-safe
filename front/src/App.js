// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Ocorridos from './pages/Ocorridos/ocorridos';
import NovoOcorrido from './pages/NovoOcorrido/novo-ocorrido';
import Header from './pages/Header/Header';
import Informacoes from './pages/Informacoes/informacoes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ocorridos" element={<Ocorridos />} />
        <Route path="/novo-ocorrido" element={<NovoOcorrido />} />
        <Route path="/informacoes" element={<Informacoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
