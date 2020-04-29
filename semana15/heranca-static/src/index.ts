import { User } from './User'
import { Customer } from  './Customer'
import { Employee } from './Employee'
import { Seller } from './Seller'

// EXERCÍCIO 1 
// a. Seria possível imprimir a senha (`password`) atrelada a essa instância?
// RESPOSTA: Não. Pois não tem um método que chame a instância do password. Para que ele funcionar é possível acrescentar um método password.

// b. Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?
// RESPOSTA: 1 vez.
const myAccount = new User("1", "eloisa@gmail.com", "Eloisa", "qwerty");

console.log(myAccount.getId())
console.log(myAccount.getEmail())
console.log(myAccount.getName())


// EXERCÍCIO 2
// a. Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal? 
// RESPOSTA: 1 vez, depois de imprimir  a chamada do construtor User.

// b. Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?
// RESPOSTA: 2 vezes, na primeira chamada da classe pai e na segunda chamada do construtor da classe filha Customer.

const myOtherAccount = new Customer("2", "fernanda@gmail.com", "Fernanda", "qwerty", "200");
console.log(myOtherAccount.getId())
console.log(myOtherAccount.getEmail())
console.log(myOtherAccount.getName())
console.log('O número do cartão é ' + myOtherAccount.getCreditCard())


// EXERCÍCIO 3
// a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// RESPOSTA: Não, pois ela não tem um método atrelado ao password na classe pai.
// Agora, imprima todas as informações possíveis da instância que você criou: o id, o nome, o email, o valor total de compra (purchaseTotal) e o cartão de crédito (creditCard).
console.log('O total da compra é R$' + myOtherAccount.purchaseTotal)


// EXERCÍCIO 4  e EXERCÍCIO 5
console.log(myOtherAccount.getIntroduceYourself())

// EXERCÍCIO 6
// a. Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?
// RESPOSTA: Duas vezes. A primeira vez no chamado da classe pai e a segunda vez no construtor da casse filho. 
// b. Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?
// RESPOSTA: Os dados que vem da classe pai (id, e-mail e name) e os dados dessa classe (admissionDate e baseSalary)
const employeeData = new Employee("3", "joao@gmail.com", "João", "password", "28/04/2020", 5000)

console.log(employeeData.getId())
console.log(employeeData.getEmail())
console.log(employeeData.getName())
console.log(employeeData.getAdmissionDate())
console.log('O total do salário é R$', employeeData.getBaseSalary())

// EXERCÍCIO 7
console.log('O total do salário + benefícios é R$', employeeData.calculateTotalSalary())


// EXERCÍCIO 8
// a. Crie uma instância da classe `Seller`. Você vai reparar que essa classe já possui um construtor, pois quando não colocamos um construtor na classe filha, 
// ela herda o construtor da classe Pai. Quais parâmetros você teve que passar para esse construtor?
// RESPOSTA: Id, e-mail, name, password, admissionDate e baseSalary.

// b. Imprima todas as informações da instância que você criou individualmente (ou seja, cada uma em uma linha própria). 
// O que você conseguiu imprimir? O que não conseguiu? Por quê?
// RESPOSTA: Consegui imprimir todos. O que segue não aparecendo é o password. Nessa questão não entendi bem explicar o porquê.
const sellerData = new Seller("4", "maria@gmail.com", "Maria", "pass", "01/01/2019", 6000)

console.log(sellerData.getId())
console.log(sellerData.getEmail())
console.log(sellerData.getName())
console.log(sellerData.getAdmissionDate())
console.log('O salário é R$', sellerData.getBaseSalary())

// EXERCÍCIO 9 
// a. Agora, teste o método setter, atualizando esse valor para o que você quiser. É possível imprimir no terminal o valor salesQuantity da instância que você criou? Por quê?
// RESPOSTA: Porque o valor foi lido pelo setSalesQuantity e depois alterado pelo getSalesQuantity. 
sellerData.setSalesQuantity(50)
console.log(sellerData.getSalesQuantity())

