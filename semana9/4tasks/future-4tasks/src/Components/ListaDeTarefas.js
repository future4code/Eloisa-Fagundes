import React from 'react'
import { connect } from 'react-redux'

const ListaDeTarefas = () => {
    return (
        <div>
        <ul>
        <li>tarefa 1</li>
        <li>tarefa 2</li>
        <li>tarefa  </li>
        <span 
        // onClick={() => props.dispatch(removerTarefa())}
        > 
         -X-
        </span> 
    </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = () => {}

export default connect(mapStateToProps, mapDispatchToProps)(ListaDeTarefas)