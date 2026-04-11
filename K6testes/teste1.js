import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 30 }, // Ramp-up para 30 usuários em 30 segundos
        { duration: '1m', target: 10 },  // Manter 30 usuários por 1 minuto
        { duration: '30s', target: 0 },   // Ramp-down para 0 usuários em 30 segundos
    ],
};

export default function () {
    const res = http.get('https://test.k6.io');
    check(res, {
        'status é 200': (r) => r.status == 200,
    });
    sleep(1);

}
