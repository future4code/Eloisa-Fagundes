

const riscaTarefaCompleta = () => {
    // Responsável por riscar tarefa completa da lista
    return {
        type:'RISCA_TAREFA_COMPLETA',
        payload : {
        }
    }
}

const adicionaTarefaCompletaAListaFeito = () => {
    // Responsável por ADICIONAR tarefa a lista de tarefas completas
    return {
        type:'ADD_TAREFA_COMPLETA_A_LISTA_DE_FEITO',
        payload : {
        }
    }
}

const removeTarefaCompletaAListaFeito = () => {
    // Responsável por REMOVER tarefa a lista de tarefas completas
    return {
        type:'ADD_TAREFA_COMPLETA_A_LISTA_DE_FEITO',
        payload : {
        }
    }
}

const devolveTarefaParaListaPendente = () => {
    // Responsável por DEVOLVER tarefa para lista de PENDENTE
    return {
        type:'DEVOLVE_TAREFA_PARA_LISTA_PENDENTE',
        payload : {
        }
    }
}