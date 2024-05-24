import React, { useState, useRef } from 'react';
import axios from 'axios';
import './ocorridos.css'
import Input from './input'


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('input atual')
    console.log(currentInput.name)
    console.log('input sendo inputado')
    console.log(name)
    setQueryData({ ...queryData, [name]: value });
  };

  const handleClick = ({name, type}) => {
    /*document.getElementById(currentInput.name).value = ''*/
    setCurrentInput({name:name, type:type})
  }

  return (
    <div className="ocorridos-body">
      <button onClick={handleClick({name:'estado', type:'text'})}>Estado</button>
      <button onClick={handleClick({name:'municipio', type:'text'})}>municipio</button>

      <Input name={currentInput.name} type={currentInput.type} value={queryData['${currentInput.name}']} handleChange={handleChange} />
    </div>
  );
}

export default Ocorridos;