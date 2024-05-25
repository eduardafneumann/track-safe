import React, { useState } from "react";
import "./novo-ocorrido.css";

function InformacoesPessoais({ formData, handleChange, prevStep, nextStep }) {
  return (
    <div className="novo-ocorrido-body">
      <p className="novo-ocorrido-instruction">
        <b>Primeiro, nos conte algumas coisas sobre você, por favor.</b>
      </p>

      <div className="novo-ocorrido-fields-area">
        <div className="novo-ocorrido-field">
          <div className="novo-ocorrido-field-title">Qual sua idade?</div>
          <input
            className="novo-ocorrido-field-input"
            id="idade"
            name="idade"
            type="number"
            value={formData.idade}
            onChange={handleChange}
          />
        </div>

        <div className="novo-ocorrido-field">
          <label className="novo-ocorrido-field-title">
            Com qual raça você se identifica?
          </label>
          <br></br>
          <select
            className="novo-ocorrido-field-input"
            id="raca"
            name="raca"
            value={formData.raca}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Parda">Parda</option>
            <option value="Preta">Preta</option>
            <option value="Indígena">Indígena</option>
            <option value="Branca">Branca</option>
            <option value="Amarela">Amarela</option>
          </select>
        </div>

        <div className="novo-ocorrido-field">
          <div className="novo-ocorrido-field-title">Qual é sua identidade de gênero?</div>
          <input
            className="novo-ocorrido-field-input"
            id="identidade_genero"
            name="identidade_genero"
            type="text"
            value={formData.identidade_genero}
            onChange={handleChange}
          />
        </div>

        <div className="novo-ocorrido-field">
          <div className="novo-ocorrido-field-title">Qual é sua orientação sexual?</div>
          <input
            className="novo-ocorrido-field-input"
            id="orientacao_sexual"
            name="orientacao_sexual"
            type="text"
            value={formData.orientacao_sexual}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="novo-ocorrido-button-area">
        <button className="novo-ocorrido-button" onClick={prevStep}>
          Voltar
        </button>
        <button className="novo-ocorrido-button" onClick={nextStep}>
          Prosseguir
        </button>
      </div>
    </div>
  );
}

export default InformacoesPessoais;
