import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 30 }, 
        { duration: '1m', target: 10 },  
        { duration: '30s', target: 0 },  
    ],
};

export default function () {
    const res = http.get('https://test.k6.io');
    check(res, {
        'status é 200': (r) => r.status == 200,
    });
    sleep(1);

}
