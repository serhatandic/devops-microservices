import request from 'supertest';
import express from 'express';

const app = express();
app.get('/', (req, res) => {
	res.send('Hello from Product Service!');
});

describe('GET /', () => {
	it('responds with "Hello from Product Service!"', (done) => {
		request(app)
			.get('/')
			.expect('Hello from Product Service!')
			.expect(200, done);
	});
});
