const express = require('express');
const app = express();

const authentication = require('./modules/authentication');
const token_gen = require('./modules/token_gen');

app.get('/', async(req, res) => {
    var auth = false

    if (req.headers['x-access-token']) {
        auth = await authentication(req);
    } else {
        auth = false;
    }

    if (auth) {
        res.send('Hello World!');
    } else {
        res.send('Not authenticated');
    }

});

// XXXX-XXXX-XXXX-XXXX


app.listen(3000, () => {
    console.log('http://localhost:3000');
})