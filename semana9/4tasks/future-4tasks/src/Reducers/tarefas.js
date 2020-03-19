
const estadoInicial = {
    listaDeTarefas: [
        {
            id: 1,
            text: "tarefa impossível",
            completou: false
        }
    ]
}

const tarefas = (state = estadoInicial, action) => {
    switch (action.type) {
        case "ADD_NOVA_TAREFA":
            return [
                // ...state.valorDaTarefa,
                // {
                //     id: new Date().getTime(),
                //     text: action.text,
                //     completou: false
                // }
            ]

        case "REMOVE_TAREFA":
            return 

        case "ALTERNA_TAREFA":
            return state.map(itemTarefa =>
                itemTarefa.id === action.id ? {
                    ...itemTarefa, completou: !itemTarefa.completou
                } : itemTarefa)

        // case 'LIDA_COM_TAREFA_COMPLETA': {
        //     return novaTarefaCompleta
        // }

        // case 'LIDA_COM_MUDANCA_DE_LISTA': {
        //     return novaTarefaCompleta
        // }

        default:
            return state
    }
}

export default tarefas