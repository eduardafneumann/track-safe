const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./../base_de_dados/base.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

app.get('/api/ocorridos', (req, res) => {
  const { tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero } = req.query;
  
  console.log(tipo);
  
  let sql = 'SELECT * FROM ocorridos WHERE 1=1';
  let params = [];

  sql += ' AND descricao IS NOT ""';

  if (tipo) {
    sql += ' AND tipo = ?';
    params.push(tipo);
  }

  if (municipio) {
    sql += ' AND municipio = ?';
    params.push(municipio);
  }

  if (estado) {
    sql += ' AND estado = ?';
    params.push(estado);
  }

  if (data) {
    sql += ' AND data = ?';
    params.push(data);
  }

  if (idade) {
    sql += ' AND idade = ?';
    params.push(idade);
  }

  if (raca) {
    sql += ' AND raca = ?';
    params.push(raca);
  }

  if (orientacao_sexual) {
    sql += ' AND orientacao_sexual = ?';
    params.push(orientacao_sexual);
  }

  if (identidade_genero) {
    sql += ' AND identidade_genero = ?';
    params.push(identidade_genero);
  }

  console.log(sql);
  console.log(params);

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.post('/api/ocorridos', (req, res) => { 
  const { descricao, tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero } = req.body; 
  db.run('INSERT INTO ocorridos (descricao, tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [descricao, tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
