// Lista de actions creators
// Adiciona uma tarefa
// Apaga uma tarefa
// toggle tarefa
// Marcar todas tarefas como completas
// Remover tarefas completas
// Filtrar as tarefas

export default adicionarNovaTarefa = (text) => {
    // Adiciona uma tarefa
    return {
        type: 'ADD_NOVA_TAREFA',
        payload: {
            text: text
        }
    }
}

const alternaTarefa = (id) => {
    // Apaga uma tarefa
    return {
        type: 'ALTERNA_TAREFA',
        payload: {
            id: id
            // FAZER ID CHEGAR VIA PARÂMETRO (linha13)
        }
    }
}

const removerTarefa = (id) => {
    // toggle tarefa
    return {
        type: 'REMOVER_TAREFA',
        payload: {
            id: id
            // FAZER ID CHEGAR VIA PARÂMETRO (linha13)
        }
    }
}

const marcarTodasComoCompletas = () => {
    // Marcar todas tarefas como completas
    return {
        type: 'MARCA_TODAS_COMO_COMPLETAS',
    }
}

const removeTodasCompletas = (id) => {
    // Remover tarefas completas
    return {
        type: 'REMOVE_TODAS_COMPLETAS',
        payload: {
            id: id
        }
    }
}

const filtraAsTarefas = (filter) => {
    // Filtra as tarefas
    return {
        type: 'FILTRA_AS_TAREFAS',
        payload: {
            filter: filter
        }
    }
}

// QUANDO A TAREFA É CRIADA, 
// ela vai para lista de PENDENTE até ser checada através do checkbox. Como fazer?


