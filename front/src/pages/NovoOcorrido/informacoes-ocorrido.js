import React, { useState } from 'react';
import './novo-ocorrido.css';

function  InformacoesOcorrido({ formData, handleChange, nextStep, prevStep }) {  
  return (
    <div>
        <p><b>Obrigada por chegar até aqui. Agora nos conte sobre o que aconteceu, por favor.</b></p>
        
        <div>
          <div>Quando você sofreu a violência de gênero?</div>
          <input id="data" name='data' type="date" value={formData.data} onChange={handleChange}/>
        </div>

        <div>
          <div>Em qual município?</div>
          <input id="municipio" name='municipio' type="text" value={formData.municipio} onChange={handleChange} />
        </div>

        <div>
          <div>Em qual estado?</div>
          <input id="estado" name='estado' type="text" value={formData.estado} onChange={handleChange}/>
        </div>

        <div>
          <label>Por último, qual foi o tipo?</label>
          <br></br>
          <select id="tipo" name='tipo' value={formData.tipo} onChange={handleChange}>
              <option value=""></option>
              <option value="Física">Física</option>
              <option value="Sexual">Sexual</option>
              <option value="Psicológica">Psicológica</option>
          </select>
        </div>

        <button onClick={prevStep}>Voltar</button>  
        <button onClick={nextStep}>Acabar registro</button>  

    </div>
  );
}

export default InformacoesOcorrido;