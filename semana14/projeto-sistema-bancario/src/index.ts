import { readFileSync, writeFileSync } from 'fs'
import * as moment from 'moment'

moment.locale("pt-br")

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
        dataJson.push(novaConta)
        writeFileSync(jsonFile, JSON.stringify(dataJson, null, 4))
        console.log("Conta criada com sucesso!")

    } catch (error) {
        console.error("não foi possível criar sua conta.", error)
    }
}


if (funcionalidade === "criarConta") {

    const dataDeNascimentoMoment = moment(dataDeNascimento, "DD/MM/YYYY")
    const hoje = moment()

    const idade = hoje.diff(dataDeNascimentoMoment, "years")
    if (idade < 18) {
        console.log("Você não tem idade mínima permitida pra criar uma conta.")
    } else {
        const contaPesquisada: object[] = dataJson.filter((conta: conta) => conta.CPF === CPF)
        if (contaPesquisada.length >= 1) {
            console.log("CPF já cadastrado!")
        } else {
            createAccount()
        }
    }
}

else if (funcionalidade === "pegarSaldo") {
    const contaPesquisada: conta[] = dataJson.filter((conta: conta) => conta.CPF === CPF)
    if (contaPesquisada.length >= 1) {
        const saldoDaConta = contaPesquisada[0].saldo
        console.log("O saldo é de: " + saldoDaConta)
    } else {
        console.log("Conta não encontrada.")
    }
    
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

else if (funcionalidade === "buscarContas") {
    console.log(data)
}

else if (funcionalidade === undefined) {
    console.log("você precisa passar uma funcionalidade.")
}

