import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.send('Hello from User Service!');
});

app.listen(3000, () => {
	console.log('User service listening on port 3000');
});
