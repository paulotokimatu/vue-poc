import Vue from 'vue';
import Buefy from 'buefy';
import '@testing-library/jest-dom';
import { server } from './mocks/server';

beforeAll(() => {
  Vue.use(Buefy);

  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
