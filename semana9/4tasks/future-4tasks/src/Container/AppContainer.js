import React from 'react'
import { connect } from "react-redux"
import { criarNovaTarefa, removerTarefa} from '../Actions/Index'

const AppContainer = props => {
    console.log(props.tarefas)
    return (
        <div>
        <h1>4Tasks</h1>
            <form>
                <input placeholder="O que deve ser feito?"></input>
                <button onClick=
                {() => props.dispatch(criarNovaTarefa())}>
                     Adicionar nova tarefa </button>
            </form>
            <ul>
                <li>tarefa 1</li>
                <li>tarefa 2</li>
            </ul>
               <button 
                onClick={() => props.dispatch(removerTarefa())}> 
                 DELETAR 
                </button> 
            <div>
                <button>Marcar Todas Como Completas</button>
                <p>Filtros</p>
                <button>Todas</button>
                <button>Pendentes</button>
                <button>Completas</button>
            </div>
            <div>
                <button>Remover Todas Completas</button>
            </div>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        tarefas: state.tarefas
    }
}


export default connect(mapStateToProps)(AppContainer)