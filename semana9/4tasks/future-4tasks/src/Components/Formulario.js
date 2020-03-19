import React from 'react'
import { connect } from 'react-redux'
import { criarNovaTarefa } from '../Actions/Index'

class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textoDoInput: ''
        }
    }

    lidaComMudancaInput = (event) => {
        this.setState({ textoDoInput: event.target.value })
    }

    adicionarTarefaAoClicar = (event) => {
        console.log("Clicou!", this.state.textoDoInput)
    }

    render() {
        return (
            <form>
                <input 
                placeholder="O que deve ser feito?"
                value={this.state.textoDoInput}
                onChange={this.lidaComMudancaInput}>
                </input>
                <button
                type="button"
                onClick={this.adicionarTarefaAoClicar}
                // {() => props.dispatch(criarNovaTarefa())}
                >
                    Adicionar nova tarefa
             </button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        adicionarNovaTarefaNaLista: (text) => {
            dispatch(criarNovaTarefa(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Formulario)