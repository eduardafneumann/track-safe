import React, { useState } from 'react';
import axios from 'axios';
import "./novo-ocorrido.css";

function  NovoOcorrido() {
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [estado, setEstado] = useState('');
  const [data, setData] = useState('');
  const [idade, setIdade] = useState('');
  const [raca, setRaca] = useState('');
  const [identidade_genero, setGenero] = useState('');
  const [orientacao_sexual, setSexualidade] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const tipoInput = document.getElementById('tipo');
    const municipioInput = document.getElementById('municipio');
    const estadoInput = document.getElementById('estado');
    const dataInput = document.getElementById('data');

    if(!tipo || !municipio || !estado || !data){
      if(!tipo) { tipoInput.classList.add('highlight') }
      else { tipoInput.classList.remove('highlight'); }

      if(!municipio) { municipioInput.classList.add('highlight') }
      else { municipioInput.classList.remove('highlight'); }

      if(!estado) { estadoInput.classList.add('highlight') }
      else { estadoInput.classList.remove('highlight'); }

      if(!data) { dataInput.classList.add('highlight') }
      else { dataInput.classList.remove('highlight'); }

    } else {
      tipoInput.classList.remove('highlight');
      municipioInput.classList.remove('highlight');
      estadoInput.classList.remove('highlight');
      dataInput.classList.remove('highlight');

      try {
        const response = await axios.post('http://localhost:3001/api/ocorridos', 
                                          {descricao, tipo, municipio, estado, data, idade, 
                                          raca, orientacao_sexual, identidade_genero});
        console.log('Ocorrido added:', response.data);
      } catch (error) {
        console.error('There was an error adding the user!', error);
      }
    }
  };
  
  return (
    <div className="NovoOcorrido">
      <h1>Novo Ocorrido</h1>
      <form id="formulario" onSubmit={handleSubmit}>

        <div>
          <label>Tipo</label>
          <br></br>
          <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value=""></option>
              <option value="Física">Física</option>
              <option value="Sexual">Sexual</option>
              <option value="Psicológica">Psicológica</option>
          </select>
        </div>

        <div>
          <div>Município</div>
          <input id="municipio" type="text" value={municipio} onChange={(e) => setMunicipio(e.target.value)} />
        </div>

        <div>
          <div>Estado</div>
          <input id="estado" type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
        </div>

        <div>
          <div>Data</div>
          <input id="data" type="date" value={data} onChange={(e) => setData(e.target.value)} />
        </div>

        <div>
          <div>Idade</div>
          <input id="idade" type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>

        <div>
          <label>Raça</label>
          <br></br>
          <select id="raca" value={raca} onChange={(e) => setRaca(e.target.value)}>
              <option value=""></option>
              <option value="Parda">Parda</option>
              <option value="Preta">Preta</option>
              <option value="Indígena">Indígena</option>
              <option value="Branca">Branca</option>
              <option value="Amarela">Amarela</option>
          </select>
        </div>
        
        <div>
          <div>Identidade de Gênero</div>
          <input id="identidade_genero" type="text" value={identidade_genero} onChange={(e) => setGenero(e.target.value)} />
        </div>

        <div>
          <div>Orientação Sexual</div>
          <input id="orientacao_sexual" type="text" value={orientacao_sexual} onChange={(e) => setSexualidade(e.target.value)} />
        </div>  

        <div>
          <div>Descrição</div>
          <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </div>

        <button type="submit">Adicionar Ocorrido</button>
      </form>

      


    </div>
  );
}

export default NovoOcorrido;
