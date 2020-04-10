import axios from 'axios'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic"

// adiciona tarefa
export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: {
            task,
        }
    }
}

const setTasks = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks,
    }
})


export const getTasks = () => async (dispatch) => {

    try {
        const response = await axios.get(`${baseUrl}/planner-sagan-eloisa`)
        dispatch(setTasks(response.data))
        console.log(response)
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível mostrar a lista de tarefas.")
    }
}


export const createTask = (text, day) => async () => {
    console.log('entrou create task', text, day)
    try {
        await axios.post(`${baseUrl}/planner-sagan-eloisa`,
            {
                "text": text,
                "day": day
            }

        ).then(response => {
            console.log(response)
        })
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível criar sua tarefa!")
    }
}
