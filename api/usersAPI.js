const express = require('express');
const users = require('../users');

const router = express.Router();


router.get('/api/users', (req, res) => {
	res.json(
		users.list()
	);
});

router.post('/api/users', (req, res) => {
	res.json(
		users.add(req.body)
	);
});

router.get('/api/user/:id', (req, res) => {
	res.json(
		users.get(req.params.id)
	);
});

router.put('/api/user/:id', (req, res) => {
	req.body.id = req.params.id;
	res.json(
		users.update(req.body)
	);
});

router.delete('/api/user/:id', (req, res) => {
	res.json(
		users.delete(req.params.id)
	);
});

module.exports = router;