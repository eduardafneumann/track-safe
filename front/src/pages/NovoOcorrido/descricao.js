import "./novo-ocorrido.css";

import React from "react";

function Descricao({
  formData,
  handleChange,
  prevStep,
  handleSubmit,
  handleSharing,
}) {
  return (
    <div className="novo-ocorrido-body">
      <h1 className="novo-ocorrido-description-title">
        Gostaria de compartilhar sua ocorrência com a comunidade?
      </h1>

      <div className="novo-ocorrido-description-instruction">
        Sentimos muito pelo o que aconteceu! Caso se sinta confortável,
        compartilhe sua ocorrencia com a comunidade e nos ajude a criar uma rede
        de opoio mais representativa
      </div>

      <textarea
        required
        name="descricao"
        className="novo-ocorrido-description-input"
        onChange={handleChange}
      ></textarea>

      <div className="novo-ocorrido-button-area">
        <button className="novo-ocorrido-button" onClick={prevStep}>
          Voltar
        </button>
        <button className="novo-ocorrido-button" onClick={handleSharing}>
          Compartilhar
        </button>
        <button className="novo-ocorrido-button" onClick={handleSubmit}>
          Prefiro não
        </button>
      </div>
    </div>
  );
}

export default Descricao;
