const express = require('express');
const quotesRouter = express.Router();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');
const { getIndexById} = require('./utils');
const { refreshId} = require('./utils');

quotesRouter.get('/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    const returnObj = {quote: randomQuote}
    res.send(returnObj);
});

quotesRouter.get('/', (req, res, next) => {
    if(Object.keys(req.query).length === 0) {
    const returnObj = { quotes: quotes };
    res.send(returnObj)
    } else {
        const person = req.query.person;
        const results = quotes.filter(quote => {
            return quote.person === person;
        });
        const returnObj = { quotes: results };
        res.send(returnObj);
    }
});

quotesRouter.post('/', (req, res, next) => {
    const newQuote = req.query.quote;
    const person = req.query.person;
    let quote = {quote: newQuote, person: person};

    if(quote.hasOwnProperty('quote') && quote.hasOwnProperty('person')) {
        quote.id = quotes.length + 1;
        quotes.push(quote);
        res.status(201).send({quote});
        
    } else {
        res.status(400).send('You need to have both quote and author!');      
    }
});

quotesRouter.put('/', (req, res, next) => {
    const id = req.query.id;
    const newQuote = req.query.quote;
    const person = req.query.person;
    let quote = {id: Number(id), quote: newQuote, person: person};
    
    if(quote.hasOwnProperty('quote') && quote.hasOwnProperty('person')) {
        const quoteIndex = getIndexById(id, quotes);
        if(quoteIndex !== -1) {
            quotes[quoteIndex] = quote;
            res.send({quote: quote});
        } else {
            res.status(404).send('Please try with a valid id!');
        }
    } else {
        res.status(400).send('You need to have both quote and author!');    
    }
});

quotesRouter.delete('/', (req, res, next) => {
    const id = req.query.id;
    const quoteIndex = getIndexById(id, quotes);
    console.log(quoteIndex);
    
    if(quoteIndex !== -1) {
        console.log('Delete conditional passed');
        console.log(quotes[quoteIndex]);
        quotes.splice(quoteIndex, 1);
        refreshId(quotes);
        res.send({quote: {}});
    }
});

module.exports = {quotesRouter};