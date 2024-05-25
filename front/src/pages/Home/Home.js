import "./Home.css";

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-background">
      <div className="scrollable">
        <div className="text-background">
          <h1 className="site-name">Track Safe</h1>
          <p className="site-description">
            Projeto desenvolvido durante o hackathon promovido pelo grupo Women
            in Tech. Um canal de denúncia anônima, onde você pode relatar
            situações de violência de gênero.
          </p>
          <div className="button-area">
            <Link className="button" to="/ocorridos">
              Buscar Relatos
            </Link>
            <br></br>
            <Link className="button" to="/novo-ocorrido">
              Registrar Ocorrido
            </Link>
            <br></br>
            <Link className="button" to="/informacoes">
              Informações
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
