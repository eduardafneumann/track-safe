import React, { useState } from 'react';
import axios from 'axios';

function CriarOcorrido() {
  const [id, setId] = useState('');
  const [cidade, setCidade] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/ocorridos', { id, cidade, descricao });
      console.log('Ocirrido added:', response.data);
    } catch (error) {
      console.error('There was an error adding the user!', error);
    }
  };

  return (
    <div className="CriarOcorrido">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
          </label>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default CriarOcorrido;
