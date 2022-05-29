const button = document.querySelector('button');
button.addEventListener('click', function () {
  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then((response) => response.json())
    .then((data) => {
      const quote = data[0];
      const h1 = document.querySelector('h1');
      h1.textContent = quote;
    });
});
