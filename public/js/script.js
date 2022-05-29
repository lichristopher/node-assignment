const button = document.querySelector('button');
button.addEventListener('click', function () {
  fetch('/api')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const quote = data.quote;
      const author = data.author;
      const h1 = document.querySelector('h1');
      const h2 = document.querySelector('h2');
      h1.textContent = `"${quote}"`;
      h2.textContent = `${author}`;
    });
  // fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const quote = data[0];
  //     const h1 = document.querySelector('h1');
  //     h1.textContent = `"${quote}"`;
  //   });
});
