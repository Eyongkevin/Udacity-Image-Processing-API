/* eslint-disable no-undef */
import request from 'supertest';
import { app } from '../app';

describe('Test IndexController', () => {
  it("Request '/' should return 'Udacity Image Processing API'", async () => {
    const result = await request(app).get('/').send();

    expect(result.status).toBe(200);
    expect(result.body.data).toBe('Udacity Image Processing API');
  });
});
