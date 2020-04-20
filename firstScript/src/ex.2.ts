import { carro, estacionamento  } from './ex1'

function cars(array: carro[], marca?:string) : carro[] {
    if(marca) {
        return estacionamento.filter(carro => carro.marca === marca)
    }

    return estacionamento
}

const resultado = cars(estacionamento, marca: "Volksvagen");
console.log(resultado)