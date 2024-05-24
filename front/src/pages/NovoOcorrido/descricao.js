import React, { useState } from 'react';
import './novo-ocorrido.css';

function Descricao({ formData, handleChange, prevStep, handleSubmit, handleSharing }) {  
  return (
    <div className='novo-ocorrido-body'>
      <h1 className='descricao-titulo'>Gostaria de compartilhar sua ocorrência com a comunidade?</h1>

        <div className='descricao-instrucao'>Sentimos muito pelo o que aconteceu! Caso se sinta confortável, 
            compartilhe sua ocorrencia com a comunidade e nos ajude a criar uma rede 
            de opoio mais representativa</div>

        <textarea required name="descricao" className="descricao-input" onChange={handleChange}></textarea>

        <div className='botao-area'>
          <button className='botao' onClick={prevStep}>Voltar</button>  
          <button className='botao' onClick={handleSharing}>Compartilhar</button>  
          <button className='botao' onClick={handleSubmit}>Prefiro não</button>  
        </div>

    </div>
  );
}

export default Descricao;