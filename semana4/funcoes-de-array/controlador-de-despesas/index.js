// PARA LIMPAR OS DADOS 
function limparCampos() {
    let input = document.querySelector("input").value
    let select = document.querySelector("select").value
}

function limparCampos() {
    document.getElementById("valor").value = ""
    document.getElementById("tipo").value = ""
    document.getElementById("descricao").value = ""
}

let arrayDeDespesas = []

function cadastrarDespesas() {
    let valor = document.getElementById("valor").value
    let tipo = document.getElementById("tipo").value
    let descricao = document.getElementById("descricao").value

    let novaDespesa = new Despesa(valor, descricao, tipo)
    arrayDeDespesas.push(novaDespesa)
    console.log(arrayDeDespesas)

    arrayDeDespesas.forEach((despesa, index, array) => {
        document.getElementById("meu-historico").innerHTML = "<p>" + despesa.valor + despesa.tipo + despesa.descricao + "</p>"
    })
}


// ALERT
if (limparCampos === "") {
    alert("Insira sua nova despesa!")
}

// CLASSE DESPESA
class Despesa {
    constructor(valor, descricao, tipo) {
        this.valor = valor
        this.descricao = descricao
        this.tipo = tipo
    }
}

let novaDespesa = new Despesa(10, "energia", "casa");


function ImprimeUmaNovaDespesa() {
    let valor = document.getElementById("valor").value
    let descricao = document.getElementById("descricao").value
    let tipo = document.getElementById("tipo").value

    novaDespesa = ImprimeUmaNovaDespesa(valor, descricao, tipo)
}

