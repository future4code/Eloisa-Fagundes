let MeuArray: number[] = [1 ,10, 20, 100, 30, 40]

// a)
const soma = (acc: number, currentValues: number) => acc + currentValues
console.log(MeuArray.reduce(soma)) //retorna 201

const quantidade = (MeuArray)
console.log(quantidade.length) //retorna 6

const multiplica = (acc: number, currentValues: number) => acc * currentValues
console.log(MeuArray.reduce(multiplica)) //retorna 24000000

// b)

const maior = function(array: number[]) {
    return Math.max.apply(Math, array)
}
console.log(maior(MeuArray)) //retorna 100


const menor = function(array: number[]) {
    return Math.min.apply(Math, array)
}
console.log(menor(MeuArray)) //retorna 1