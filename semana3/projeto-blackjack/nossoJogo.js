import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

{  
   // pop-up BEM-VINDO
   alert ("Bem vindo ao jogo de Blackjack!")
}
// Alert Confirm QUER OUTRA RODADA? Se sim começar o jogo, se não exibir "O jogo acabou"
let confirmacao = confirm ("Gostaria de jogar mais uma rodada?")

const carta1Jogador = comprarCarta ()
const carta2Jogador = comprarCarta ()
const carta1PC = comprarCarta ()
const carta2PC = comprarCarta ()
let ganhador = 0 

const pontosJogador = carta1Jogador.valor + carta2Jogador.valor
const pontosPC = carta1PC.valor + carta2PC.valor

if (confirmacao === true){
   // Mostra as cartas + pontuação no console
   console.log ("Jogador - cartas", carta1Jogador.texto, carta2Jogador.texto, "pontuação", pontosJogador)
   console.log ("PC - cartas", carta1PC.texto, carta2PC.texto,"pontuação",pontosPC )

// IMPRIME  "O jogo acabou" quando clica em cancelar
} else {
console.log ("O jogo acabou")
}
