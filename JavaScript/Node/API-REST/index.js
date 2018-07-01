const express = require('express');
const hbs = require('express-handlebars');
const chalk = require('chalk');
const debug = require('debug')('index');
const morgan = require('morgan');
const app = express();

const port = 3000;
app.disable('x-powered-by'); // disables a header in resposne
app.use(morgan('tiny'));
app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public')); // serving static files from public directory

app.get('/', (req, res) => {
	res.render(
		'home',
		{
			title: 'main page',
			content: 'content of main page'
		}
	);
});

app.get('/blog/:date/:id?', (req, res) => {
	res.render(
		'blog',
		{
			title: 'Blog',
			date: req.params.date,
			id: req.params.id
		}
	);
});

app.listen(port, () => {
	debug(`Listening on port ${chalk.green(port)}`);
});