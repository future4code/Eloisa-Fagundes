import {combineReducers} from "redux"
import novaTarefaReducer from './CriaNovaTarefa'

// Recebe todos os reducers para depois enviar para o Store

const origemReducer = combineReducers ({
    novaTarefaReducer: novaTarefaReducer
}) 

export default origemReducer
