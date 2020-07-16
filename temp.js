const { quotes } = require('./data');

const person = 'Grace Hopper';
const results = quotes.filter(quote => {
    return quote.person === person;
    
});

console.log(results);