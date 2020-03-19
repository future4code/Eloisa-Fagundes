import React from 'react'
import { connect } from 'react-redux'

const formulario = () => {
    return(
        <form>
        <input placeholder="O que deve ser feito?"></input>
        <button 
        // onClick=
        // {() => props.dispatch(criarNovaTarefa())}
        >
        Adicionar nova tarefa 
             </button>
    </form>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        adicionarNovaTarefa: (text) => dispatch(adicionarNovaTarefa(text))
     }
}

export default connect(mapStateToProps, mapDispatchToProps) (formulario)