/* Exercício 1 INTERPRETAÇÃO DE CÓDIGO
r: Ele está somando +1 do bloco 2 e +1 do bloco 1, quando ele retorna para o bloco 2 adiciona +1 e volta
para o bloco 2 adicionando o valor impresso no bloco 2. Ele vai executar esse comando até sum atigir o
valor de 15, sempre acrescentando o valor do bloco 2 ao sum.

/* Perguntas 2 INTERPRETAÇÃO DE CÓDIGO
A. O comando push acrescenta mais um valor ao final do array.
B. Ele imprime [10, 15, 20, 25, 30]. (Só os múltiplos de 5).
C.  Caso fossem múltiplos de 3 seria impresso: [12, 15, 18, 21, 27, 30].
Caso fosse múltiplo de 4 seria impresso [12].
*/ 

/* Exercício 3 ESCRITA DE CÓDIGO*/ 

// A. 
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = arrayOriginal[0]
let menor = arrayOriginal [0]

for (let i = 0; i < 12; i++){
    const numero = arrayOriginal[i]

    if(numero > maior) {
        maior = numero
    } 
}
console.log(maior)


for (let i = 0; i < 12; i++){
    const numero = arrayOriginal[i]

    if(numero < menor) {
        menor = numero
    } 
}
console.log(menor)
 
// B. 

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novaLista = []

// for(const numero of arrayOriginal){
//     if (arrayOriginal%10 === 0){
//         novaLista.push(numero)
//     }
// }
// console.log(novaLista)

// C.  
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novaLista = []

for(const numero of arrayOriginal){
    if (numero%2=== 0){
        novaLista.push(numero)
    }
}
console.log(novaLista)

//D.



