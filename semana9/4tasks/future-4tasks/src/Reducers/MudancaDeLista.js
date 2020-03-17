

const mudaTarefaDeLista = (state = tarefaCompleta, action) => {
    switch (action.type) {
        case 'LIDA_COM_TAREFA_COMPLETA': {
            return novaTarefaCompleta
        }
        case 'LIDA_COM_MUDANCA_DE_LISTA': {
            return novaTarefaCompleta
        }
        default:
            return state
    }
}



export default mudaTarefaDeLista