const express = require('express');
const app = express();
const { quotesRouter } = require('./quotes-router');


const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use('/api/quotes', quotesRouter);

app.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});

//TODO Partial match on search quotes by author?