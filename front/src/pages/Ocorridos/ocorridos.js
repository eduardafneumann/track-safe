import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ocorridos.css'


function Ocorridos() {
  const [resultados, setResultados] = useState([]);
  const [queryData, setQueryData] = useState({
    idade: '',
    raca: '',
    identidade_genero: '',
    orientacao_sexual: '',
    municipio: '',
    estado: '',
    tipo: ''
  });
  const [currentInput, setCurrentInput] = useState({
    name: 'estado',
    type: ''
  });
  const [renderInput, setRenderInput] = useState({
    estado: null
  });
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/ocorridos', {
        params: { 
          tipo: queryData.tipo || undefined,
          municipio: queryData.municipio || undefined,
          estado: queryData.estado || undefined,
          data: queryData.data || undefined,
          idade: queryData.idade || undefined,
          raca: queryData.raca || undefined,
          identidade_genero: queryData.genero || undefined,
          orientacao_sexual: queryData.sexualidade || undefined
        }
      });
      setResultados(response.data.data);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault()
    fetchData();
  }

  const handleChange = e => {
    setQueryData({ ...queryData, [e.target.name]: e.target.value });
  }

  return (
    <div className="ocorridos-body">
      <form onSubmit={handleSubmit}>

        <div>
          <div>Tipo</div> 

          <select id="tipo" value={queryData.tipo} onChange={handleChange}>
              <option value=""></option>
              <option value="Física">Física</option>
              <option value="Sexual">Sexual</option>
              <option value="Psicológica">Psicológica</option>
          </select>
        </div>

        <div>
          <div>Municipio</div>

          <input type="text" value={queryData.municipio} onChange={handleChange} />
        </div>

        <div>
          <div>Estado</div>

          <input type="text" value={queryData.estado} onChange={handleChange} />
        </div>

        <div>
          <div>Data</div>

          <input type="date" value={queryData.data} onChange={handleChange} />
        </div>

        <div>
          <div>Idade</div>

          <input type="number" value={queryData.idade} onChange={handleChange} />
        </div>

        <div>
          <div>Raça</div>

          <select value={queryData.raca} onChange={handleChange}>
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

          <input type="text" value={queryData.genero} onChange={handleChange} />
        </div>

        <div>
          <div>Orientação Sexual</div>

          <input type="text" value={queryData.sexualidade} onChange={handleChange} />
        </div>
        
        <button type="submit">Pesquisar</button>
      </form>

      <h1>Resultados</h1>
      <ul>
        {resultados.map((item) => (
          <li key={item.id}>{item.descricao}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ocorridos;