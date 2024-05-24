import React, { useState } from 'react';
import './novo-ocorrido.css';

function  InformacoesPessoais({ formData, handleChange, prevStep, nextStep }) {  
  return (
    <div className='novo-ocorrido-body'>
        <p className='instrucao'><b>Primeiro, nos conte algumas coisas sobre você, por favor.</b></p>

        <div className='campos-area'>
          <div className='campo'>
            <div className='campo-titulo'>Qual sua idade?</div>
            <input className='campo-input' id="idade" name='idade' type="number" value={formData.idade} onChange={handleChange} />
          </div>

          <div className='campo'>
            <label className='campo-titulo'>Com qual raça você se identifica?</label>
            <br></br>
            <select className='campo-input' id="raca" name='raca' value={formData.raca} onChange={handleChange} >
                <option value=""></option>
                <option value="Parda">Parda</option>
                <option value="Preta">Preta</option>
                <option value="Indígena">Indígena</option>
                <option value="Branca">Branca</option>
                <option value="Amarela">Amarela</option>
            </select>
          </div>

          <div className='campo'>
            <div className='campo-titulo'>Qual é sua identidade de gênero?</div>
            <input className='campo-input' id="identidade_genero" name='identidade_genero' type="text" value={formData.identidade_genero} onChange={handleChange} />
          </div>

          <div className='campo'>
            <div className='campo-titulo'>Qual é sua orientação sexual?</div>
            <input className='campo-input' id="orientacao_sexual" name='orientacao_sexual' type="text" value={formData.orientacao_sexual} onChange={handleChange} />
          </div>  
        </div>

        <div className='botao-area'>
          <button className='botao' onClick={prevStep}>Voltar</button>  
          <button className='botao' onClick={nextStep}>Prosseguir</button>  
        </div>
        
    </div>
  );
}

export default InformacoesPessoais;