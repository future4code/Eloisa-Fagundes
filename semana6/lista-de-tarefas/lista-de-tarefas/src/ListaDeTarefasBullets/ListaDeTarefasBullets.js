import React from 'react'
import styled from 'styled-components'

class ListaDeTarefasBullets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          inputAtual: "",
          arrayDeTarefas: [],
        
        }
    }

// definiu que esse evento muda com o value do input
handleChange =  (event) => {
this.setState({inputAtual: event.target.value})
}

// adiciona uma nova tarefa com os objetos id, texto e completa.
adicionaTarefa = () => {
    const maisUmaTarefa = {
        id: Date.now(),
        texto: this.state.inputAtual,
        completa: false,
    }
    this.setState({
        // caso a nova atrefa a ser inserida viesse antes da tarefa antiga, coloca o maisUmaTarefa antes do ...
        arrayDeTarefas: [...this.state.arrayDeTarefas, maisUmaTarefa],
        // v- retorna ao estado original "vazio"
        inputAtual: "",
    })
}


    render() {
        // sempre dentro do render, essa const define que a cada tarefa inserida, um novo bullet é
        // criado na lista com a tarefa nova.
        const listaDeTarefas = this.state.arrayDeTarefas.map ((cadaTarefa, index) => {
        return (<li key={index}>{cadaTarefa.texto}</li>)
        })
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.inputAtual}></input>
                <button onClick={this.adicionaTarefa}>Adicionar Nova Tarefa</button>
                <h1> Lista De Tarefas </h1>
                <ul>
                    {listaDeTarefas}
                </ul>
            </div>
        )
    }

}

export default ListaDeTarefasBullets