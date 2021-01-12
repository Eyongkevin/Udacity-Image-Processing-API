/* eslint-disable no-undef */
import request from 'supertest';
import { app } from '../app';

describe('Test IndexController', () => {
  it("Request '/' should return staus 200", async () => {
    const result = await request(app).get('/').send();

    expect(result.status).toBe(200);
  });
});
