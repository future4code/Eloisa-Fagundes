import axios from 'axios'

// adiciona tarefa
 export const addTask = (text) => {
    return {
        type: 'ADD_TASK',
        payload: {
            text,
        }
    }
}

const setTasks = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks,
    }
})

const createTask = (registerTask) => async (dispatch) => {
  console.log("Chegou", registerTask)
    
    try {

    } catch (error) {
        console.error(error.message)
        alert("Não foi possível criar sua tarefa!")
    }
}
