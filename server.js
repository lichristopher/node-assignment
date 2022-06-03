const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const quotes = require('./quotes');

function generateQuote(quoteList) {
  const randomNumber = Math.floor(Math.random() * quoteList.length);
  return quoteList[randomNumber];
}

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (page == '/api') {
    const quoteJSON = JSON.stringify(generateQuote(quotes));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(quoteJSON);
    res.end();
  } //else if
  else if (page == '/css/styles.css') {
    console.log('hello');
    fs.readFile('css/styles.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/script.js') {
    fs.readFile('js/script.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000);
