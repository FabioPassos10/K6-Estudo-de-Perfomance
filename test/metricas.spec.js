import {sleep, check } from 'k6';
import http from 'k6/http';
import { Counter, Gauge, Rate, Trend} from 'k6/metrics';

export const options ={
    vus: 1,
    duration: '6s',
    
}

const chamadas = new Counter("Quantidade_de_chamadas")
const myGauge = new Gauge("Tempo_bloqueado")
const taxa = new Rate('Taxa_de_requisicao_com_status_200')
const tendencia = new Trend('Taxa_de_espera')

export default function() {
    const res = http.get('http://test.k6.io')
    // Contador
    chamadas.add(1)
    //Medidior
    myGauge.add(res.timings.blocked)
    //taxa
    taxa.add(res.status ===200)
    //Tendencia
    tendencia.add(res.timings.waiting)

}

