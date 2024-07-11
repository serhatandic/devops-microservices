const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello from User Service! - updated');
});

app.listen(3000, () => {
	console.log('User service listening on port 3000');
});
