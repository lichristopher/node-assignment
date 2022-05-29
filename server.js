const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = 8000;

// app.get('/', (req, res) => {
//   res.send(__dirname + 'index.html');
// });

// app.use(express.static('js'));

app.use(express.static('public'));

// sendFile will go here
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api', async (req, res) => {
  const response = await axios.get(
    'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
  );
  const quote = response.data[0];
  console.log(quote);
  res.json({
    swansonQuote: quote,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// sendFile will go here
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
