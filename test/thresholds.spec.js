import {sleep, check } from 'k6';
import http from 'k6/http';
import { htmlReport } from 'k6-reporter';


export const options ={
    vus: 2,
    duration: '4s',
    thresholds:{
        http_req_failed: ['rate<0.01'],
        // http_req_duration: ['p(95)<200','p(90)<400','p(99.9)<2000']
        // http_req_duration: [{threshold: 'p(95)<100',abortOnFail: true}] // aborta/encerra o teste caso falhe a validação
        http_req_duration: [{threshold: 'p(95)<100',abortOnFail: true, delayAbortEval: "10s"}]
    }
    
}
export function handleSummary(data) {
    return {
        'report.html': htmlReport(data),
    };
}


export default function() {
    const res = http.get('http://test.k6.io')
    check(res,{
        'Status code é 200: ': (r)=>r.status === 200
    })
}

