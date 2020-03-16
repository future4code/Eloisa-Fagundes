

function criarNovaTarefa (text) {
    // Responsável por inserir nova tarefa na lista
    return {
        type:'ADD_NOVA_TAREFA',
        payload : {
            text: text
            // text,
        }
    }
}

function removerTarefa () {
    // Responsável por remover tarefa da lista
    return {
        type:'REMOVE_TAREFA',
        payload : {
        
        }
    }
}
