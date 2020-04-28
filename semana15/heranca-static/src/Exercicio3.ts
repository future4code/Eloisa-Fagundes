
// Exercício3

// a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// RESPOSTA: Não, pois ela não tem um método atrelado ao password na classe pai.

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
      purchaseTotal: number = 0
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard
      this.purchaseTotal = purchaseTotal
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }

    public getPurchaseTotal(): number {
        return this.purchaseTotal;
      }
  }

const myOtherAccount = new Customer("2", "fernanda@gmail.com", "Fernanda", "qwerty", "123 456 789", 200);

// EXERCÍCIO 3 : Agora, imprima todas as informações possíveis da instância que você criou: o id, o nome, o email, o valor total de compra (purchaseTotal) e o cartão de crédito (creditCard).
console.log(myOtherAccount.getId())
console.log(myOtherAccount.getEmail())
console.log(myOtherAccount.getName())
console.log('O número do cartão é ' +  myOtherAccount.getCreditCard())
console.log('O total da compra é R$' + myOtherAccount.getPurchaseTotal())