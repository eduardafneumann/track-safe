import React, { useState } from 'react';
import './ocorridos.css';
import Select from './select';
import Input from './input';

function  InputArea({ renderInputFields, queryData, handleChange }) {  
  return (
    <div className='input-area'>
        { renderInputFields.tipo ? <Select name='tipo' value={queryData.tipo} handleChange={handleChange}/> : null }
        { renderInputFields.raca ? <Select name='raca' value={queryData.raca} handleChange={handleChange}/> : null }
        { renderInputFields.identidade_genero ? <Input type='text' name='identidade_genero' value={queryData.identidade_genero} handleChange={handleChange}/> : null }
        { renderInputFields.orientacao_sexual ? <Input type='text' name='orientacao_sexual' value={queryData.orientacao_sexual} handleChange={handleChange}/> : null }
        { renderInputFields.municipio ? <Input type='text' name='municipio' value={queryData.municipio} handleChange={handleChange}/> : null }
        { renderInputFields.estado ? <Input type='text' name='estado' value={queryData.estado} handleChange={handleChange}/> : null }
        { renderInputFields.idade ? <Input type='number' name='idade' value={queryData.idade} handleChange={handleChange}/> : null }
        { renderInputFields.data ? <Input type='date' name='data' value={queryData.data} handleChange={handleChange}/> : null }
    </div>
  );
}

export default InputArea;