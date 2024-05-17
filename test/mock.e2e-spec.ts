import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('MockController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET mock', () => {
    return request(app.getHttpServer())
      .get('/mock')
      .expect(200)
      .expect({
        message: 'This is mock data for GET request',
        data: { key: 'value' }
      });
  });

  it('/POST mock', () => {
    const postData = { test: 'data' };
    return request(app.getHttpServer())
      .post('/mock')
      .send(postData)
      .expect(201)
      .expect({
        message: 'This is mock data for POST request',
        received: postData
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
