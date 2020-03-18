import {combineReducers} from "redux"
import tarefas from './tarefas'

// Recebe todos os reducers para depois enviar para o Store

const origemReducer = combineReducers ({
    tarefas: tarefas 
}) 

export default origemReducer
