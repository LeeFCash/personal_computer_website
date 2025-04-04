const express = require('express');
const mysql = require('mysql2');
const cors = require('cor');

const app = express();
app.use(cors());

const db = myspl.createConnection({
	host: 'localhost',
	user: 'leecash',
	password: '',
	database: 'pcInfo'
});
db.connect((err) => {
	if(err){
		console.error('Error connecting ro mySQL:', err);
		return;
	}
	console.log('Connected to mySQL server');
});
app.get('/data', (req, res) => {
	const query = ``;
	db.query(query, (err, results) => {
		if(err) {
			res.status(500).send('Error fetching data');
			return;
		}
		res.json(results);
	});
});

app.listen(3307, () => {
	console.log('Server runing on http://localhost:3307');
});
