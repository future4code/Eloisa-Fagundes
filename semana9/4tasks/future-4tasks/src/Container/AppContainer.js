import React from 'react'
import { connect } from "react-redux"
import { criarNovaTarefa, removerTarefa} from '../Actions/Index'

const AppContainer = props => {
    console.log(props.tarefas)
    return (
        <div>
            <input> Hello? can you hear me?
            </input>
            {/* <button onClick={() => props.dispatch(removerTarefa())} > DELETAR </button> */}
            <button onClick={() => props.dispatch(criarNovaTarefa())}> Adiciona Nova Tarefa</button>
            <div>
                <ul>
                <li>item da lista</li>
                </ul>
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