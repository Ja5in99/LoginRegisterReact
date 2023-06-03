const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'loginregister',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    'INSERT INTO accounts (username, password) VALUES (?, ?)',
    [username, password],
    (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'Error registering user' });
      } else {
        console.log('User registered successfully');
        res.status(200).json({ message: 'User registered successfully' });
      }
    }
  );
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});