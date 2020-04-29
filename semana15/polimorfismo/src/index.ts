import {Client} from './Client'
import {Place} from './Place'


// EXERCÍCIO 1
// a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
// **RESPOSTA:** Imprimiu as própriedades name, registrationNumber e ConsumedEnergy. Porque eram as propriedades exigidas na interface.


// const client: Client = {
//     name: "Eloisa",
//     registrationNumber: 1,
//     consumedEnergy: 20,
//     calculateBill: () => {
//         return 2
//     }
// }

// console.log(client.name)
// console.log(client.registrationNumber)
// console.log(client.consumedEnergy)
// console.log(client.calculateBill())

// _______________________________________________________________________________________________________________________________________________________
// EXERCICIO 2
// a. Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
// **RESPOSTA:**Cannot create an instance of an abstract class (Não é possível criar uma instância em uma classe abstrata).

// b. Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
// **RESPOSTA:** Podemos criar implementações nas classes filhas, são elas que devem lidar com o que a classe pai tem que receber.


// const newPlace = new Place("01329-010")
// console.log(newPlace.getCep())

// _______________________________________________________________________________________________________________________________________________________
// EXERCICIO 3
// **RESPOSTA:** Classes criadas e com seus respectivos getters nos arquivos Residence.ts, Commerce.ts e Industry.ts

// _______________________________________________________________________________________________________________________________________________________
// EXERCICIO 4
// **RESPOSTA:** 