import React from 'react'


const estadoInicial = {
    
}

const adicionaTarefaAListaEspecificaReducer = (state = tarefaCompleta, action) => {
    switch (action.type) {
        case 'RISCA_TAREFA_COMPLETA': {
            const tarefaCompletaAntiga = state.tarefaCompleta
            const novaTarefaCompleta = {novaTarefa: tarefaCompletaAntiga}
            return novaTarefaCompleta
        }
        case 'ADD_TAREFA_COMPLETA_A_LISTA_DE_FEITO': {
            const adicionaTarefaFeitaAListaAntiga = state.novaTarefa
            const novaAdicionaTarefaFeitaALista = {novaTarefa: novaTarefaCompleta}
            return novaTarefaCompleta
        }
        default:
            return state
    }
}

export default adicionaTarefaAListaEspecificaReducer 