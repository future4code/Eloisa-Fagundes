

const criarNovaTarefa = (text) => {
    // Responsável por inserir nova tarefa na lista
    return {
        type:'ADD_NOVA_TAREFA',
        payload : {
            text: text
        }
    }
}

const removerTarefa = (id) => {
    // Responsável por remover tarefa da lista
    return {
        type:'REMOVER_TAREFA',
        payload : {
            id: id
            // FAZER ID CHEGAR VIA PARÂMETRO (linha13)
        }
    }
}

// QUANDO A TAREFA É CRIADA, ela vai para lista de PENDENTE até ser checada através do checkbox. Como fazer?


