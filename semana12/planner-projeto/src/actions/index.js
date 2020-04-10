import axios from 'axios'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic"

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


const getTasks = () => async (dispatch) => {

    try {

    } catch (error) {
        console.error(error.message)
        alert("Não foi possível mostrar a lista de tarefas.")
    }
}

export const createTask = (text, day) => async (dispatch) => {
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
