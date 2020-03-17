import React from 'react'


const estadoInicial = {
    valorDaTarefa = "aprender react pra ontem "
}


const novaTarefaReducer = (state = estadoInicial, action) => {
    // responsável por criar nova tarefa e remover tarefa
    switch (action.type) {
        case "ADD_NOVA_TAREFA": {
            const tarefaAntiga = state.valorDaTarefa
            const novaTarefa = { valorDaTarefa: tarefaAntiga }
            return novaTarefa
        }
        case "_TAREFA": {
            const tarefaAntiga = state.valorDaTarefa
            const novaTarefa = { valorDaTarefa: tarefaAntiga }
            return novaTarefa

        }

        default:
            return state
    }
}
s