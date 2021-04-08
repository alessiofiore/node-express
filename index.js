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

app.get('/error', function (req, res) {
  console.log('GET error received');
  res.status(500).send('Internal Server Error');
});

app.listen(9999, function () {
  console.log('Example app listening on port 9999!');
});
