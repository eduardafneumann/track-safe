import React, { useState } from 'react';
import './novo-ocorrido.css';

function  InformacoesPessoais({ formData, handleChange, nextStep }) {  
  return (
    <div>
      <p className='textoIntrodutorio'>Sentimos muito que você tenha passado uma situação de violência de gênero. 
        <b> Nenhuma palavra pode apagar a dor que você  sofreu</b>, mas saiba que <b>você não está sozinha</b>. 
        Estamos aqui para tentar trazer voz ao seu relato.</p>
        
        <p><b>Primeiro, nos conte algumas coisas sobre você, por favor.</b></p>

        <div>
          <div>Qual sua idade?</div>
          <input id="idade" name='idade' type="number" value={formData.idade} onChange={handleChange} />
        </div>

        <div>
          <label>Com qual raça você se identifica?</label>
          <br></br>
          <select id="raca" name='raca' value={formData.raca} onChange={handleChange} >
              <option value=""></option>
              <option value="Parda">Parda</option>
              <option value="Preta">Preta</option>
              <option value="Indígena">Indígena</option>
              <option value="Branca">Branca</option>
              <option value="Amarela">Amarela</option>
          </select>
        </div>

        <div>
          <div>Qual é sua identidade de gênero?</div>
          <input id="identidade_genero" name='identidade_genero' type="text" value={formData.identidade_genero} onChange={handleChange} />
        </div>

        <div>
          <div>Qual é sua orientação sexual?</div>
          <input id="orientacao_sexual" name='orientacao_sexual' type="text" value={formData.orientacao_sexual} onChange={handleChange} />
        </div>  

        <button onClick={nextStep}>Prosseguir</button>  

    </div>
  );
}

export default InformacoesPessoais;