import React from 'react'
import styled from 'styled-components'

const ContainerForm = styled.form`
display: flex;
flex-direction:column;
align-items:center;
`

const ContainerTitle = styled.h1`
display: flex;
flex-direction:column;
align-items:center;
`

class ListaDeTarefas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tarefa: "",
            listaDeTarefas: [],
        }
    }



    CriarLista = (tarefa) => {
        const novaTarefa = [...this.state.listaDeTarefas, {tarefa: tarefa}]
        this.setState({ listaDeTarefas: novaTarefa })
        console.log(this.listaDeTarefas)
    }

    MudarTarefa = event => {
        this.setState({tarefa: event.target.value})
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <ContainerTitle>Lista de tarefas</ContainerTitle>
                <ContainerForm>
                    <label>
                        <input placeholder="tarefa" type="text" value={this.state.tarefa} onChange={this.MudarTarefa}>
                        </input>
                    </label>
                    <button onClick={() => {
                        this.CriarLista(this.state.tarefa)
                    }} >Adicionar</button>
                    <div>
                        <span>Status</span>
                        <select>
                            <option value="Nenhum">Nenhum</option>
                            <option value="Pendentes">Pendentes</option>
                            <option value="Completas">Completas</option>
                        </select>

                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
                </ContainerForm>
            </div>
        )
    }
}

export default ListaDeTarefas