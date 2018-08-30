const express = require('express');
const app = express();

const database = require('./mocks/database');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/books', (req, res) => res.send(database));

app.listen(3001, () => console.log('App listening on port 3001'));
