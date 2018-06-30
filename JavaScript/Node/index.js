const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('index');
const morgan = require('morgan');
const app = express();

const port = 3000;
app.use(morgan('tiny'));

app.get('/', (req,res) => {
    res.send('first test');
});

app.listen(port, () => {
    debug(`Listening on port ${chalk.red(port)}`);
});