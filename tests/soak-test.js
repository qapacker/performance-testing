import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://localhost:3000';

export const options = {
  stages: [
    { duration: '1m', target: 50 },  // Aumenta a 50 usuarios
    { duration: '3m', target: 50 },  // Mantiene 50 usuarios durante 4 horas
    { duration: '1m', target: 0 },   // Reduce la carga a 0 usuarios
  ],
};

export default function () {
  const res = http.get(`${BASE_URL}/api/users`);
  
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1);
}