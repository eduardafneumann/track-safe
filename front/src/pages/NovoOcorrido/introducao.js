import React, { useState } from "react";
import "./novo-ocorrido.css";

function Introducao({ nextStep }) {
  return (
    <div className="novo-ocorrido-body">
      <p className="novo-ocorrido-introduction">
        Sentimos muito que você tenha passado uma situação de violência de
        gênero.
        <b> Nenhuma palavra pode apagar a dor que você sofreu</b>, mas saiba que{" "}
        <b>você não está sozinha</b>. Estamos aqui para tentar trazer voz ao seu
        relato.
      </p>

      <div className="novo-ocorrido-button-area">
        <button className="novo-ocorrido-button" onClick={nextStep}>
          Prosseguir
        </button>
      </div>
    </div>
  );
}

export default Introducao;
