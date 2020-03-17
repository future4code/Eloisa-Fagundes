

const criarNovaTarefa = (text) => {
    // Responsável por inserir nova tarefa na lista
    return {
        type:'ADD_NOVA_TAREFA',
        payload : {
            text: text
        }
    }
}

const removerTarefa = () => {
    // Responsável por remover tarefa da lista
    return {
        type:'REMOVE_TAREFA',
        payload : {
        }
    }
}

// QUANDO A TAREFA É CRIADA, ela vai para lista de PENDENTE até ser checada através do checkbox. Como fazer?


