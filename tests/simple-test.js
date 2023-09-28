import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '10s'
};

export default () => {
    http.get('http://localhost:5157/age/1990-01-01');
};