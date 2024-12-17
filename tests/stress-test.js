import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://localhost:3000';

export const options = {
  stages: [
    { duration: '1m', target: 10 },  // Inicia con 10 usuarios
    { duration: '30s', target: 1000 }, // Aumento rápido a 1000 usuarios
    { duration: '1m', target: 1500 }, // Aumento a 1500 usuarios
    { duration: '1m', target: 2000 }, // Aumento a 2000 usuarios (carga excesiva)
    { duration: '1m', target: 0 },    // Reduce a 0 usuarios
  ],
};

export default function () {
  const res = http.get(`${BASE_URL}/api/users`);
  
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1);
}
