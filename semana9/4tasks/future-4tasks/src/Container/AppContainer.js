import React from 'react'
import { connect } from "react-redux"
import { criarNovaTarefa, removerTarefa} from '..Actions/Index'

const App = props => {
    return (
        <div>
            <input> Hello? can you hear me?
            </input>
            <button onClick={() => props.dispatch(removerTarefa())} > DELETAR </button>
            <button onClick={() => props.dispatch(criarNovaTarefa())}> Adiciona Nova Tarefa</button>
            <div>
                <ul>
                <li>item da lista</li>
                </ul>
            </div>
        </div>
    )
}

export default connect()(App)