const express = require('express');
let app = express();
var bodyParser = require('body-parser');
var database = require('../database/index.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/fortunes', function (req, res) {
	database.save(repo);
  res.send('Successfully saved Fortune');
});

app.get('/fortunes', function (req, res) {
	database.getFortune(function(fortune){
		res.send(fortune);
	});
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

