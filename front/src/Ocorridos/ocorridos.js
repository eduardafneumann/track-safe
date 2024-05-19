import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Ocorridos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Data from SQLite Database</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.cidade}: {item.descricao}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ocorridos;