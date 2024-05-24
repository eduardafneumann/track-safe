import React, { useState } from 'react';
import './novo-ocorrido.css';

function Descricao({ formData, handleChange, prevStep, handleSubmit, handleSharing }) {  
  return (
    <div>
      <h1 className='textoIntrodutorio'>Gostaria de compartilhar sua ocorrência com a comunidade?</h1>

        <div>Sentimos muito pelo o que aconteceu! Caso se sinta confortável, compartilhe sua ocorrencia 
            com a comunidade e nos ajude a criar uma rede de opoio mais representativa</div>

        <div>
          <input id="descricao" name='descricao' type="text" value={formData.descricao} onChange={handleChange} />
        </div>

        <button onClick={prevStep}>Voltar</button>  
        <button onClick={handleSharing}>Compartilhar</button>  
        <button onClick={handleSubmit}>Prefiro não</button>  

    </div>
  );
}

export default Descricao;