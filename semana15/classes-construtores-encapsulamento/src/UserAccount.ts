import { Transaction } from "./Transaction";


export class UserAccount {
    balance: number;
    cpf: string;
    name: string;
    age: number;
    transactions: Transaction[]

    constructor(_balance: number, _cpf:string, _name: string, _age: number, _transactions: Transaction[]) {
        this.balance = _balance
        this.cpf = _cpf
        this.name = _name
        this.age = _age
        this.transactions = _transactions
    }

    getBalance():number   {
        return this.balance
    } 

}

const minhaConta = new UserAccount(1, "123", "Eloisa", 29, [])

const guardaSaldo = minhaConta.getBalance()
console.log("Meu saldo é R$" + guardaSaldo)
