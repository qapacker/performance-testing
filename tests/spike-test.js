import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://localhost:3000';

export const options = {
  stages: [
    { duration: '1m', target: 10 },  // Aumenta de 0 a 10 usuarios
    { duration: '30s', target: 500 }, // Pico repentino de 500 usuarios
    { duration: '1m', target: 10 },  // Reduce la carga de nuevo a 10 usuarios
  ],
};

export default function () {
  const res = http.get(`${BASE_URL}/api/users`);
  
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  
  sleep(1);
}