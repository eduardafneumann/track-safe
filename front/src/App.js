import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Ocorridos from "./pages/Ocorridos/ocorridos";
import NovoOcorrido from "./pages/NovoOcorrido/novo-ocorrido";
import Informacoes from "./pages/Informacoes/informacoes";

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
