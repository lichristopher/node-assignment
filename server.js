const express = require('express');
const axios = require('axios');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!');
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
