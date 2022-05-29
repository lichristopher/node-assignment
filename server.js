const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = 8000;

const quotes = [
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    author: 'Walt Disney',
  },
  {
    quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
    author: 'Steve Jobs',
  },
  {
    quote: `If life were predictable it would cease to be life, and be without flavor.`,
    author: 'Eleanor Roosevelt',
  },
  {
    quote: `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.`,
    author: 'Oprah Winfrey',
  },
  {
    quote: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`,
    author: 'James Cameron',
  },
  {
    quote: `Life is what happens when you're busy making other plans.`,
    author: 'John Lennon',
  },
];

function generateQuote(quoteList) {
  const randomNumber = Math.floor(Math.random() * quoteList.length);
  return quoteList[randomNumber];
}

// app.get('/', (req, res) => {
//   res.send(__dirname + 'index.html');
// });

// app.use(express.static('js'));

app.use(express.static('public'));

// sendFile will go here
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// app.get('/api', async (req, res) => {
//   const response = await axios.get(
//     'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
//   );
//   const quote = response.data[0];
//   console.log(quote);
//   res.json({
//     swansonQuote: quote,
//   });
// });

app.get('/api', async (req, res) => {
  res.json(generateQuote(quotes));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
