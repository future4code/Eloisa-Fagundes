// adiciona tarefa

 export const addTask = (text) => {
    return {
        type: 'ADD_TASK',
        payload: {
            // id,
            text,
            // day
        }
    }
}

