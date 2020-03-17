import {combineReducers} from "redux"
import novaTarefaReducer from './TarefasAddsERemovidas'

// Recebe todos os reducers para depois enviar para o Store

const origemReducer = combineReducers ({
    // adiciona tarefa e remove tarefa
    novaTarefaReducer: novaTarefaReducer
}) 

export default origemReducer
