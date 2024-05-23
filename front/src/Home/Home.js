// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
  return (
    <div>
      <h2>Track Safe</h2>
      <Link to="/ocorridos">Ocorridos</Link>
      <br></br>
      <Link to="/novo-ocorrido">Novo Ocorrido</Link>
    </div>
  );
}

export default Home;
