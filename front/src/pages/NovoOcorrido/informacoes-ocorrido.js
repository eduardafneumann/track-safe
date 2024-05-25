import React, { useState } from "react";
import "./novo-ocorrido.css";

function InformacoesOcorrido({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div className="novo-ocorrido-body">
      <p className="novo-ocorrido-instruction">
        <b>
          Obrigada por chegar até aqui. Agora nos conte sobre o que aconteceu,
          por favor.
        </b>
      </p>

      <div className="novo-ocorrido-fields-area">
        <div className="novo-ocorrido-field">
          <div className="novo-ocorrido-field-title">
            Quando você sofreu a violência de gênero?
          </div>
          <input
            className="novo-ocorrido-field-input"
            id="data"
            name="data"
            type="date"
            value={formData.data}
            onChange={handleChange}
          />
        </div>

        <div className="novo-ocorrido-field">
          <div className="novo-ocorrido-field-title">Em qual município?</div>
          <input
            className="novo-ocorrido-field-input"
            id="municipio"
            name="municipio"
            type="text"
            value={formData.municipio}
            onChange={handleChange}
          />
        </div>

        <div className="novo-ocorrido-field">
          <div className="novo-ocorrido-field-title">Em qual estado?</div>
          <input
            className="novo-ocorrido-field-input"
            id="estado"
            name="estado"
            type="text"
            value={formData.estado}
            onChange={handleChange}
          />
        </div>

        <div className="novo-ocorrido-field">
          <label className="novo-ocorrido-field-title">Por último, qual foi o tipo?</label>
          <br></br>
          <select
            className="novo-ocorrido-field-input"
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Física">Física</option>
            <option value="Sexual">Sexual</option>
            <option value="Psicológica">Psicológica</option>
          </select>
        </div>
      </div>

      <div className="novo-ocorrido-button-area">
        <button className="novo-ocorrido-button" onClick={prevStep}>
          Voltar
        </button>
        <button className="novo-ocorrido-button" onClick={nextStep}>
          Acabar registro
        </button>
      </div>
    </div>
  );
}

export default InformacoesOcorrido;
