// a. Seria possível imprimir a senha (`password`) atrelada a essa instância?
// RESPOSTA: Não. Pois não tem um método que chame a instância do password. Para que ele funcionar é possível acrescentar um método password.

// b. Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?
// RESPOSTA: 1 vez.

export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }

const myAccount = new User("1", "eloisa@gmail.com", "Eloisa", "qwerty");

console.log(myAccount.getId())
console.log(myAccount.getEmail())
console.log(myAccount.getName())
