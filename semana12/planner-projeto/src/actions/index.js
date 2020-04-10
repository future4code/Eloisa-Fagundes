import axios from 'axios'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-sagan-eloisa"

const setTasks = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks,
    }
})

export const getTasks = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}`)
        dispatch(setTasks(response.data))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível mostrar a lista de tarefas.")
    }
}

const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: {
            task,
        }
    }
}

export const createTask = (text, day) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}`,
            {
                "text": text,
                "day": day
            }
        )
        dispatch(addTask(response.data))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível criar sua tarefa!")
    }
}
