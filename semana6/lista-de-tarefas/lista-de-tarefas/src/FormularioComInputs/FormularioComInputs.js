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

class FormularioComInputs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tarefa: "",
            novaListaDeTarefas: [],
        }
    }


    CriarLista = (tarefa) => {
        const novaTarefa = this.state.tarefa.slice()
        tarefas.push(tarefa)
        this.setState({
            tarefas: tarefas,
            novaListaDeTarefas:[]

        })
        console.log(this.listaDeTarefas)
    }

    MudarTarefa = event => {
        this.setState({tarefa: event.target.value})
    }

    apareceTarefa =() =>{
        
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <ContainerTitle>Lista de tarefas</ContainerTitle>
                <ContainerForm>
                    <label >
                        <input placeholder="tarefa"
                        value = {this.state.tarefa} 
                        onChange={this.MudarTarefa}>
                        </input>
                    </label>
                    <button onClick={this.apareceTarefa}>Adicionar</button>
                    <div>
                        <span>Status</span>
                        <select>
                            <option value="Nenhum">Nenhum</option>
                            <option value="Pendentes">Pendentes</option>
                            <option value="Completas">Completas</option>
                        </select>
                        </div>
                </ContainerForm>
            </div>
        )
    }
}

export default FormularioComInputs