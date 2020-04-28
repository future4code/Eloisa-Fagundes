
// EXERCÍCIO 2
// a. Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal? 
// RESPOSTA: 1 vez, depois de imprimir  a chamada do construtor User.

// b. Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?
// RESPOSTA: 2 vezes, na primeira chamada da classe pai e na segunda chamada do construtor da classe filha Customer.

import { User } from "./User"

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

const myOtherAccount = new Customer("2", "fernanda@gmail.com", "Fernanda", "qwerty", "200");

console.log(myOtherAccount.getId())
console.log(myOtherAccount.getEmail())
console.log(myOtherAccount.getName())
console.log('O número do cartão é ' + myOtherAccount.getCreditCard())

// Exercício 4 
console.log(myOtherAccount.getIntroduceYourself())