// Faça uma função que receba um array de números e retorne um objeto que tenha as seguintes informações: 
let arr: number[] = [1, 2, 3, 4, 5, 6]

// 1) a quantidade de números que há no array
let quantidadeDeNumeros = (arr)
console.log(quantidadeDeNumeros.length) //6

// 2) a quantidade de números ímpares no array
let quantImpares = arr.filter(i => i % 2 !== 0)//[ 1, 3, 5 ]
console.log(quantImpares)

// 3) soma de todos os elementos do array
const somaArray = (acc, val) => acc + val
console.log(arr.reduce(somaArray)) //21
// Eu fiz assim mas não entendi porque funcionou, mesmo os parâmetros parecendo incorretos.