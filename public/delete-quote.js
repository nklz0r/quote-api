const submitButton = document.getElementById('submit-quote');
const newQuoteContainer = document.getElementById('new-quote');

submitButton.addEventListener('click', () => {
    console.log('Event fired');

    const id = document.getElementById('id').value;
  

  fetch(`/api/quotes?id=${id}`, {
      method : 'DELETE',
  })
  .then(response => response.json())
  .then(({quote}) => {
    const newQuote = document.createElement('div');
    newQuote.innerHTML = `<h3>Congrats, your quote was deleted!</h3>`;
    newQuoteContainer.appendChild(newQuote);
  });
});
