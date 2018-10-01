const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3003, () => console.log('Fortune Cookie Server is Listening on port 3000'));

app.get('/fortune', (req, res) => {
  db.returnRandomFortune(fortune)
    .then(fortune => res.status(200).send(fortune))
    .catch(err => res.status(500).send(err));
});

app.post('/fortune', (req, res) => {
  const searchTerm = req.params.searchTerm;
  db.returnSearch(id, searchTerm)
    .then(results => res.status(200).send(results))
    .catch(err => res.status(500).send(err));
});

module.exports = app;