const express = require('express');
const app = express();

const database = require('./mocks/database.json');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/books', (req, res) => res.send(database));

app.get('/books/:bookId', (req, res) => res.send(database[req.params.bookId]));

app.listen(3001, () => console.log('App listening on port 3001'));
