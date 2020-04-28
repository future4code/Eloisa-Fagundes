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

    getAccounts():any {
        return this.name 
    }

}

const minhaConta = new UserAccount(1, "123", "Eloisa", 29, [])
const suaConta = new UserAccount(100, "321", "Fernanda", 28 , [])
const outraConta = new UserAccount(562, "654", "Lola", 31 , [])

const meuSaldo = minhaConta.getBalance()
console.log("Meu saldo é R$" + meuSaldo)

const meuSaldoDois = suaConta.getBalance()
console.log("Meu saldo é R$" + meuSaldoDois)

const meuSaldoTres = outraConta.getBalance()
console.log("Meu saldo é R$" + meuSaldoTres)
