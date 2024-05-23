import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Ocorridos() {
  const [ocorridos, setOcorridos] = useState([]);

  const [tipo, setTipo] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [estado, setEstado] = useState('');
  const [data, setData] = useState('');
  const [idade, setIdade] = useState('');
  const [raca, setRaca] = useState('');
  const [genero, setGenero] = useState('');
  const [sexualidade, setSexualidade] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/procurar-ocorridos', {
        params: { 
          tipo: tipo || undefined,
          municipio: municipio || undefined,
          estado: estado,
          data: data || undefined,
          idade: idade || undefined,
          raca: raca || undefined,
          genero: genero || undefined,
          sexualidade: sexualidade || undefined
        }
      });
      setOcorridos(response.data.data);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(estado);
    fetchData();
  }

  return (
    <div className="Ocorridos">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo</label> 
          <br></br>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="fisica">Física</option>
              <option value="sexual">Sexual</option>
              <option value="psicologica">Psicológica</option>
          </select>
        </div>

        <div>
          <div>Municipio</div>
          <input type="text" value={municipio} onChange={(e) => setMunicipio(e.target.value)} />
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
        <button type="submit">Pesquisar</button>
      </form>

      <h1>Resultados</h1>
      <ul>
        {ocorridos.map((item) => (
          <li key={item.id}>{item.descricao}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ocorridos;