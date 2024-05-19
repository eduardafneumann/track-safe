const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database('./ocorrencias.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Example endpoint to get data from SQLite database
app.get('/api/ocorrencias', (req, res) => {
  db.all('SELECT * FROM ocorrido', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// Example endpoint to insert data into SQLite database
app.post('/api/ocorrencias', (req, res) => {  
  const {descricao, tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero} = req.body; 
  db.run('INSERT INTO ocorrido (descricao, tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [descricao, tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero], function(err) {
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
