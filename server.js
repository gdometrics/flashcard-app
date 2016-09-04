let express = require('express');
let bodyParser = require('body-parser');

let data = {};

express()
  .use(express.static(__dirname + '/public'))
  .use(bodyParser.json())
  .get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))
  .get('/api/data', (req, res) => res.json(data))
  .post('/api/data', (req, res) => res.json(data = req.body))
  .listen(3333);
