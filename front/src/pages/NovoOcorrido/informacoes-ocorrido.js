import React, { useState } from 'react';
import './novo-ocorrido.css';

function  InformacoesOcorrido({ formData, handleChange, nextStep, prevStep }) {  
  return (
    <div className='novo-ocorrido-body'>
        <p className='instrucao'><b>Obrigada por chegar até aqui. Agora nos conte sobre o que aconteceu, por favor.</b></p>
        
        <div className='campos-area'>
          <div className='campo'>
            <div className='campo-titulo'>Quando você sofreu a violência de gênero?</div>
            <input className='campo-input' id="data" name='data' type="date" value={formData.data} onChange={handleChange}/>
          </div>

          <div className='campo'>
            <div className='campo-titulo'>Em qual município?</div>
            <input className='campo-input' id="municipio" name='municipio' type="text" value={formData.municipio} onChange={handleChange} />
          </div>

          <div className='campo'>
            <div className='campo-titulo'>Em qual estado?</div>
            <input className='campo-input' id="estado" name='estado' type="text" value={formData.estado} onChange={handleChange}/>
          </div>

          <div className='campo'>
            <label className='campo-titulo'>Por último, qual foi o tipo?</label>
            <br></br>
            <select className='campo-input' id="tipo" name='tipo' value={formData.tipo} onChange={handleChange}>
                <option value=""></option>
                <option value="Física">Física</option>
                <option value="Sexual">Sexual</option>
                <option value="Psicológica">Psicológica</option>
            </select>
          </div>
        </div>

        <div className='botao-area'>
          <button className='botao' onClick={prevStep}>Voltar</button>  
          <button className='botao' onClick={nextStep}>Acabar registro</button>  
        </div>
        
    </div>
  );
}

export default InformacoesOcorrido;