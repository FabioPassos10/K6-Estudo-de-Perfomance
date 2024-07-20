// Inicialização 

import sleep from 'k6'


// Configuração

export const options ={
    vus: 1,
    durantion: '10s',
    
}

//Execução
export default function() {
    console.log('Tesando k6');
    sleep(1);
}

// Desmontagem
export function teardown(data) {
    console.log(data);
}