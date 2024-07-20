import {sleep, check } from 'k6';
import http from 'k6/http';

export const options ={
    vus: 1,
    duration: '4s',
    
}

export default function() {
    const res = http.get('http://test.k6.io')
    check(res,{
        'Status code é 200': (r)=>r.status === 200
    })
    sleep(1);
}


export function teardown(data) {
    console.log(data);
}