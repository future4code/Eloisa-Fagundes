import React from 'react'

const listaDeTarefas = () => {
    return (
        <div>
        <ul>
        <li>tarefa 1</li>
        <li>tarefa 2</li>
        <li>tarefa  </li>
        <span 
        // onClick={() => props.dispatch(removerTarefa())}
        > 
         -X-
        </span> 
    </ul>
        </div>
    )
}

export default listaDeTarefas