//Inicialização
import sleep from 'k6'

//Configuração
export const options = {
    vus: 1,
    duration: '10s'
}
 
//execução
export default function() {
    console.log('Testando o K6')
    sleep(1)
}

//desmontagem
export function teardown(data) {
    console.log(data)
}
