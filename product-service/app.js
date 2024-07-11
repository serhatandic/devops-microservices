import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.send('Hello from Product Service!');
});

app.listen(3001, () => {
	console.log('Product service listening on port 3001');
});
