/* ---->  INTERPRETAÇÃO DE CÓDIGO


1. O código é um conversor de dólares em real. O usuário tem 100 dólares e vai converter esse valor 
em reais. O console retorna 430.

2. O código faz uma lista de opções de investimento e devolve prousuário o valor após o investimento.
Caso o usuário não digite nenhum valor, um alert é impresso solicitando um valor para executar o 
cálculo. O console imprime novoMontante como R$165 e segundoMontante exibe o alet "TIPO DE 
INVESTIMENTO INCORRETO!" pois não foi declarado um case de Tesouro Direto.

3. Esse código faz um loop utilizando o for of para trazer duas novas variações com o array.push. 
Se numero no array1 tiver resto da divisão igual a zero o console deve imprimir sua quantidadade
através do array1.lenght, senão se não tiver resto da divisão igual a zero imprime no console através 
do array2.lenght. As impressões no console serão Quantidade total de numeros 14, 6 e 8 
(resultados respectivamente dequantidade de elementos de numeros.lenght, array1.lenght e array2.lenght).

4.
*/


//  ----> INTERPRETAÇÃO DE LÓGICA DE PROGRAMAÇÃO 


// 1. Podemos percorrer uma lista com while, for of e for.

// - EXEMPLO DE WHILE
const listaDeNumeros = [1, 2, 3, 4]
let i = 0
while (i < 4) {
    console.log(i)
    ++i
}

//  - EXEMPLO DE FOR OF:
const listaDeNumeros = [1, 2, 3, 4]

for (const numero of listaDeNumeros) {
    console.log(numero)
}

// - EXEMPLO DE FOR:
const listaDeNumeros = [1, 2, 3, 4]
for (let i = 0; i < 4; i++) {
    console.log(listaDeNumeros)
}

/* 2.
a.) false
b.) true
c.) true
d.) true
e.) false

// 3.

Não funciona pois const não foi declarada e não existe uma variável pedindo somente os números pares.
Segue abaixo uma meneira de fazer com que o código retorne a mensagem esperada.
*/

const listaDeNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const novaLista = []

for (const quantidadeDeNumerosPares of listaDeNumeros) {
    if (quantidadeDeNumerosPares % 2 === 0) {
        novaLista.push(quantidadeDeNumerosPares)
    }
}
console.log(novaLista)


// 4.

let a = 1
let b = 3
let c = 2

if (a === b && a === c && b === c) {
    console.log("equilatero")
} else if (a === b || b === c || c === a) {
    console.log("isósceles")
} else if (a != b & a != c & b != c) {
    console.log("escaleno")
}

// 5.  

let primeiroValor = 10
let segundoValor = 25
// verificação do maior valor
if (primeiroValor > segundoValor) {
    console.log("O maior valor é:" + primeiroValor)
} else if (primeiroValor < segundoValor) {
    console.log("O maior valor é:" + segundoValor)
} else {
    console.log("Os valores são iguais.")
}

// verificação se o número é divisível
const resultadoDaPrimeiraDivisao = primeiroValor % segundoValor
const resultadoDaSegundaDivisao = segundoValor % primeiroValor

if (resultadoDaPrimeiraDivisao === 0) {
    console.log(primeiroValor + " é divisível por " + segundoValor)
} else if (resultadoDaSegundaDivisao === 0) {
    console.log(segundoValor + " é divisível por " + primeiroValor)
} else {
    console.log(primeiroValor + " não é divisível por " + segundoValor + " e nem " + segundoValor + " é divisível por " + primeiroValor)
}

// verificação da diferença
if (primeiroValor > segundoValor) {
    console.log("a diferença entre eles é " + (primeiroValor - segundoValor))
} else {
    console.log("a diferença entre eles é " + (segundoValor - primeiroValor))
}

//  ------> EXERCICIO DE FUNÇÕES

// 1. Criar array e mostrar 2o maior e 2o menor

const meuArray = [1, 10, 3, 9, 67, 2, 0, 78, 25, 12]

function trazerNumeros(array) {
    array.sort(function (a, b) {
        return a - b
    })
    const segundoMenor = array[1]
    const segundoMaior = array[array.length - 2]

    console.log(segundoMaior)
    console.log(segundoMenor)
}

trazerNumeros(meuArray)


// 2. Mostrar alert e invocar.
let alerta = function () {
    alert("Hello Future4!")
}
alerta()

// ---------> EXERCICIOS DE OBJETOS

/* 1.
Devemos usar arrays quando necesssitamos organizar os elementos em lista (números, strings, etc) e
utilizanos objetos para elementos que queremos inserir como variáveis.
*/

// 2.
let lado1 = 1
let lado2= 2

class criaRetangulo {
    constructor(largura, altura, perimetro, area) {
            this.largura = largura
            this.altura = altura
            this.perimetro = perimetro
            this.area = area
    }
}

const criaNovoObjeto = new criaRetangulo(4, 6, (2*(4 + 6)), (4*6)  )
console.log (criaNovoObjeto)

// 3.
// 4.
// 5.