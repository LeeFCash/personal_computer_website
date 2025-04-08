const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const fs = require('fs');
const ini = require('ini');
const path = require('path');

const myCnfPath = path.join(process.env.HOME, '.my.cnf');
const config = ini.parse(fs.readFileSync(myCnfPath, 'utf-8'));

const app = express();
app.use(cors());

const dbConfig = {
	host: config.client.host || 'localhost',
	user: config.client.user,
	password: config.client.password || '',
	database: 'PC'
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
	if(err){
		console.error('Error connecting ro mySQL:', err);
		return;
	}
	console.log('Connected to mySQL server');
});
app.get('/data', (req, res) => {
	const query = `SELECT * from PCinfo;`;
	db.query(query, (err, results) => {
		if(err) {
			res.status(500).send('Error fetching data');
			return;
		}
		res.json(results);
	});
});

app.listen(3308, () => {
	console.log('Server runing on http://localhost:3308');
});
