const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const debug = require('debug')('index');
const morgan = require('morgan');
const users = require('./users');
const usersAPI = require('./api');
const app = express();
const port = 3000;

// disables a header in resposne
app.disable('x-powered-by'); 
app.use(morgan('tiny'));
app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// serving static files from public directory
app.use(express.static('public')); 
app.use(bodyParser.json());
app.use(usersAPI);

app.get('/', (req, res) => {
	res.render(
		'login',
		{
			title: 'List of users'
		}
	);
});

app.listen(port, () => {
	debug(`Listening on port ${chalk.green(port)}`);
});