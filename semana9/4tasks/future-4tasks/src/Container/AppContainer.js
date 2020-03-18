import React from 'react'
import { connect } from "react-redux"
import { criarNovaTarefa, removerTarefa} from '../Actions/Index'
import Formulario from '../Components/Formulario'
import ListaDeTarefas from '../Components/ListaDeTarefas'
import BarraDeFerramentas from '../Components/BarraDeFerramentas'

const AppContainer = props => {
    console.log(props.tarefas)
    return (
        <div>
        <h1>4Tasks</h1>
           <Formulario />
           <ListaDeTarefas />
           <BarraDeFerramentas />
         </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        tarefas: state.tarefas
    }
}


export default connect(mapStateToProps)(AppContainer)