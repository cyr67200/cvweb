const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(_dirname, 'public')));

app.get('/', async(req, res) => {
	res.sendFile(âth.join(_dirname, 'public, 'home.html'));
});

app.listen(8080, () => {
	console.log("Server successfully running on port 8080");
