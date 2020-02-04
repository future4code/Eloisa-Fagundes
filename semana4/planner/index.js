function adicionarTarefa() {
    let input = document.querySelector("input")
    let select = document.querySelector("select").value

    let novaTarefa = input.value
    let listaDeSegunda = document.getElementById("segunda")
    let listaDeTerca = document.getElementById("terca")
    let listaDeQuarta = document.getElementById("quarta")
    let listaDeQuinta = document.getElementById("quinta")
    let listaDeSexta = document.getElementById("sexta")
    let listaDeSabado = document.getElementById("sabado")
    let listaDeDomingo = document.getElementById("domingo")

    if (novaTarefa === "") {
        alert("Insira sua nova tarefa!")
    } else {
        if (select === "Segunda-feira") {
            listaDeSegunda.innerHTML += "<li>" + novaTarefa + "</li>"
        } else if (select === "Terca-feira") {
            listaDeTerca.innerHTML += "<li>" + novaTarefa + "</li>"
        } else if (select === "Quarta-feira") {
            listaDeQuarta.innerHTML += "<li>" + novaTarefa + "</li>"
        } else if (select === "Quinta-feira") {
            listaDeQuinta.innerHTML += "<li>" + novaTarefa + "</li>"
        } else if (select === "Sexta-feira") {
            listaDeSexta.innerHTML += "<li>" + novaTarefa + "</li>"
        } else if (select === "Sabado") {
            listaDeSabado.innerHTML += "<li>" + novaTarefa + "</li>"
        } else if (select === "Domingo") {
            listaDeDomingo.innerHTML += "<li>" + novaTarefa + "</li>"
        }
    }
}