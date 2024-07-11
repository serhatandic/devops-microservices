import request from 'supertest';
import express from 'express';

const app = express();
app.get('/', (req, res) => {
	res.send('Hello from User Service!');
});

describe('GET /', () => {
	it('responds with "Hello from User Service!"', (done) => {
		request(app)
			.get('/')
			.expect('Hello from User Service!')
			.expect(200, done);
	});
});
