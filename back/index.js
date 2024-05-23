const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database('./base.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Example endpoint to get data from SQLite database
app.get('/api/todos-ocorridos', (req, res) => {
  db.all('SELECT * FROM ocorridos', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.get('/api/procurar-ocorridos', (req, res) => {
  const { tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero } = req.query;
  console.log(estado);
  let sql = 'SELECT * FROM ocorridos WHERE 1=1';
  let params = [];

  if (municipio) {
    sql += ' AND municipio = ?';
    params.push(municipio);
  }

  if (estado) {
    sql += ' AND estado = ?';
    params.push(estado);
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

// Example endpoint to insert data into SQLite database
app.post('/api/ocorridos', (req, res) => {  
  console.log("aqui");
  const {descricao, tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero} = req.body; 
  db.run('INSERT INTO ocorridos (descricao, tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [descricao, tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero], function(err) {
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
