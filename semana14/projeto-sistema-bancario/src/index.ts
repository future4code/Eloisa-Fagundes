// 1. Criar um tipo para conta do usuário
// 2. Tipo para as transações que serão salvas
// 3. função createAccount p/ cadastrar usuário
// 4. função getAllAccounts p/ cadstrar o usuario em um arquivo JSON
// 5. Validação 18+ e mesnagem de erro caso não seja.


import { readFileSync, readdir } from 'fs';

const funcionalidade = process.argv[4]
const nome = process.argv[5]
const CPF = process.argv[6]
const dataDeNascimento = process.argv[7]

const jsonFile = "accounts.json"

const data = readFileSync(jsonFile).toString()
const dataJson = JSON.parse(data)    


type transacoes = {
    valor: number,
    data: any,
    descricao: string
}

type conta = {
    nome: string,
    CPF: string,
    dataDeNascimento: any,
    saldo: number,
    extrato: transacoes[]
}



function createAccount(): void {
    try {
        const novaConta: conta = {
            nome: nome,
            CPF: CPF,
            dataDeNascimento: dataDeNascimento,
            saldo: 0,
            extrato: []
        }
        dataJson.push()
        console.log(novaConta)

    } catch (error) {
        console.error("não foi possível criar sua conta.", error)
    }
}


if (funcionalidade === "criarConta") {
    createAccount()
}

else if (funcionalidade === "pegarSaldo") {
    console.log("pegarSaldo")
}

else if (funcionalidade === "adicionarSaldo") {
    console.log("adicionarSaldo")
}

else if (funcionalidade === "pagarConta") {
    console.log("pagarConta")
}

else if (funcionalidade === "transferencia") {
    console.log("transferencia")
}

else if (funcionalidade === undefined) {
    console.log("você precisa passar uma funcionalidade.")
}

