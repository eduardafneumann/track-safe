import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ocorridos.css'
import InputArea from './input-area';
import SearchIcon from './../../images/search.png';


function Ocorridos() {
  const [resultados, setResultados] = useState([]);
  const [queryData, setQueryData] = useState({
    tipo: '',
    idade: '',
    raca: '',
    identidade_genero: '',
    orientacao_sexual: '',
    municipio: '',
    estado: '',
    data: ''
  });
  const [renderInputFields, setRenderInputFields] = useState({
    tipo: false,
    idade: false,
    raca: false,
    identidade_genero: false,
    orientacao_sexual: false,
    municipio: false,
    estado: false,
    data: false
  });
  const [renderInput, setRenderInput] = useState(false);

  
  const fetchData = async () => {
    console.log(queryData.tipo)
    try {
      const response = await axios.get('http://localhost:3001/api/ocorridos', {
        params: { 
          tipo: queryData.tipo || undefined,
          idade: queryData.idade || undefined,
          raca: queryData.raca || undefined,
          identidade_genero: queryData.genero || undefined,
          orientacao_sexual: queryData.sexualidade || undefined,
          municipio: queryData.municipio || undefined,
          estado: queryData.estado || undefined,
          data: queryData.data || undefined,
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

  const handleClick = campo => {
    const newDictionary = Object.keys(renderInputFields).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setRenderInput(!renderInputFields[campo])
    setRenderInputFields({ ...newDictionary, [campo]: !renderInputFields[campo] })
  }

  return (
    <div className="ocorridos-body">

      <div className='search-area'>
        <div className='button-area'>
          <button className='botao' onClick={() => handleClick('tipo')}>Tipo</button>
          <div className='button-area-space'></div>
          <button className='botao' onClick={() => handleClick('idade')}>Idade</button>
          <div className='button-area-space'></div>
          <button className='botao' onClick={() => handleClick('raca')}>Raça</button>
          <div className='button-area-space'></div>
          <button className='botao' onClick={() => handleClick('identidade_genero')}>Identidade de Gênero</button>
        </div>

        { renderInput ? <InputArea renderInputFields={renderInputFields} queryData={queryData} handleChange={handleChange}/> : null }

        <div className='button-area'>
          <button className='botao' onClick={() => handleClick('orientacao_sexual')}>Orientação Sexual</button>
          <div className='button-area-space'></div>
          <button className='botao' onClick={() => handleClick('municipio')}>Municipio</button>
          <div className='button-area-space'></div>
          <button className='botao' onClick={() => handleClick('estado')}>Estado</button>
          <div className='button-area-space'></div>
          <button className='botao' onClick={() => handleClick('data')}>Data</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='search-button-area'>
              <button className='search-button' type="submit">
                <img className='search-logo' src={SearchIcon} alt='search icon'></img>
                Buscar
              </button>
          </div>
        </form>

      </div>

      <div className='results-area'>
        <h1 className='results-title'>Relatos</h1>
        {resultados.map((item) => (
          <div className='result'>
            <h2>Relato #{item.id}</h2>
            {item.descricao}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Ocorridos;