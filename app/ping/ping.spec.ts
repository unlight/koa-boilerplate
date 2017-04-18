import { app } from '../server';
import { Server } from 'http';

import supertest = require('supertest');

describe('GET /ping', () => {

    let server: Server;

    beforeEach(() => {
        server = app.listen();
    });

    afterEach(() => {
        server.close();
    });

    it('respond with json', (done) => {
        supertest(server)
            .get('/ping')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                done(err);
            });
    });

});
