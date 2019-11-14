var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.text());

app.get('/', function (req, res) {
  console.log('GET received');
  res.send('Hello');
});

app.post('/', function (req, res) {
  console.log('POST received');
  console.log(req.body);
  res.send('OK');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
