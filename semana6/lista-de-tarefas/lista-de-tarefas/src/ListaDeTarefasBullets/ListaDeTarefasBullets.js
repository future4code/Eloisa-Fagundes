import React from 'react'
import styled from 'styled-components'
import { element, array } from 'prop-types'

const ContainerTitle = styled.h1`
display: flex;
flex-direction:column;
align-items:center;
`
const TarefaConcluida = styled.li `
text-decoration: line-through;
`


class ListaDeTarefasBullets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          inputAtual: "",
          arrayDeTarefas: [],
        
        }
    }

// definiu que esse evento muda com o value do input
lidaComMudanca =  (event) => {
this.setState({inputAtual: event.target.value})
}

// adiciona uma nova tarefa com os objetos id, texto e completa.
adicionaTarefa = () => {
    const maisUmaTarefa = {
        id: Date.now(),
        texto: this.state.inputAtual,
        completa: false,
        status: false,
    }
    this.setState({
        // caso a nova atrefa a ser inserida viesse antes da tarefa antiga, coloca o maisUmaTarefa antes do ...
        arrayDeTarefas: [...this.state.arrayDeTarefas, maisUmaTarefa],
        // v- retorna ao estado original "vazio"
        inputAtual: "",
    })
}

riscaTarefa =() => {
    if (cadaTarefa.status === true){
        return (TarefaConcluida)
    } else {
        return( '')
    }
}

    render() {
        console.log(this.state)
        // sempre dentro do render, essa const define que a cada tarefa inserida, um novo bullet é
        // criado na lista como a tarefa nova.
        const listaDeTarefas = this.state.arrayDeTarefas.map ((cadaTarefa, index) => {
            if(cadaTarefa.completa){
            return (<TarefaConcluida key={index} onClick={cadaTarefa.completa}>{cadaTarefa.texto}</TarefaConcluida>)
            } else {
                return (<li key={index}>{cadaTarefa.texto}</li>)
            }
        })

        return (
            <div>
                <ContainerTitle> Lista De Tarefas </ContainerTitle>
                <input onChange={this.lidaComMudanca} value={this.state.inputAtual}></input>
                <button onClick={this.adicionaTarefa}>Adicionar Nova Tarefa</button>
                <span>Filtro</span>
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Pendentes">Pendentes</option>
                    <option value="Completas">Completas</option>
                </select>
                <ul>
                    {listaDeTarefas}
                </ul>
            </div>
        )
    }

}

export default ListaDeTarefasBullets