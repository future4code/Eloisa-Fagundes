import React from 'react'

// responsável por criar nova tarefa e remover tarefa


const estadoInicial = {
arrayDeTarefas = []
}


const novaTarefaReducer = (state = estadoInicial, action) => {
    switch(action.type){
    case "ADD_NOVA_TAREFA":
        const tarefa = state.valorDaTarefa
        const novaTarefa = {valorDaTarefa: tarefa }
        return novaTarefa

        default:
            return state 
    }
}

export default novaTarefaReducer 