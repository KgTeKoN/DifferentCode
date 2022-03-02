import {App} from "../app";
import { boot } from "../main";
import request from 'supertest';

let application: App;

beforeAll(async () => {
    const { app } = await boot;
    application = app;
});

describe('Users e2e', () => {
    it('Register - error', async  () => {
        const res = await request(application.app)
            .post('/users/register')
            .send({ email: 'hasherama@gmail.com', password: '1'});
        expect(res.statusCode).toBe(422);
    });

    it('Login - success', async  () => {
        const res = await request(application.app)
            .post('/users/login')
            .send({ email: 'hasherama@gmail.com', password: '2703'});
        expect(res.body.jwt).not.toBeUndefined();
    });

    it('Login - error', async  () => {
        const res = await request(application.app)
            .post('/users/login')
            .send({ email: 'hasherama@gmail.com', password: '1'});
        expect(res.statusCode).toBe(401);
    });

    it('Info - success', async  () => {
        const login = await request(application.app)
            .post('/users/login')
            .send({ email: 'hasherama@gmail.com', password: '2703'});
        const res = await request(application.app)
            .get('/users/info')
            .set('Authorization', `Bearer ${login.body.jwt}`);
        expect(res.body.email).toBe('hasherama@gmail.com');
    });

    it('Info - error', async  () => {
        const res = await request(application.app)
            .get('/users/info')
            .set('Authorization', `Bearer 1`);
        expect(res.body.email).not.toBe('hasherama@gmail.com');
    });
})

afterAll(() => {
    application.close()
})