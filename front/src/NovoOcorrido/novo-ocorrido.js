import React, { useState } from 'react';
import axios from 'axios';
import "./novo-ocorrido.css";

function CriarOcorrido() {
  const [id, setId] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [data, setData] = useState('');
  const [idade, setIdade] = useState('');
  const [raca, setRaca] = useState('');
  const [genero, setGenero] = useState('');
  const [sexualidade, setSexualidade] = useState('');

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
    <div className="NovoOcorrido">
      <h1>Novo Ocorrido</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <div>Id</div>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>

        <div>
          <div>Descrição</div>
          <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </div>

        <div>
          <label>Tipo</label> 
          <br></br>
          <select value={tipo} onChange={(e) => setDescricao(e.target.value)}>
              <option value="fisica">Física</option>
              <option value="sexual">Sexual</option>
              <option value="psicologica">Psicológica</option>
          </select>
        </div>

        <div>
          <div>Cidade</div>
          <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
        </div>

        <div>
          <div>Estado</div>
          <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
        </div>

        <div>
          <div>Data</div>
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
        </div>

        <div>
          <div>Idade</div>
          <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>

        <div>
          <label>Raça</label>
          <br></br>
          <select value={raca} onChange={(e) => setRaca(e.target.value)}>
              <option value="pardo">Pardo</option>
              <option value="preto">Preto</option>
              <option value="indigena">Indígena</option>
              <option value="branco">Branco</option>
              <option value="amarelo">Amarelo</option>
          </select>
        </div>
        
        <div>
          <div>Identidade de Gênero</div>
          <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />
        </div>

        <div>
          <div>Orientação Sexual</div>
          <input type="text" value={sexualidade} onChange={(e) => setSexualidade(e.target.value)} />
        </div>


        

        

        <button type="submit">Adicionar Ocorrido</button>
      </form>

      


    </div>
  );
}

export default CriarOcorrido;
