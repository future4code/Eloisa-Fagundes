const initialState = {
    tasks: []
}

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            const newTask = action.payload.task
            return {
                tasks:
                    [
                        newTask,
                        ...state.tasks
                    ]
            }
        case "SET_TASKS":
            return {
                ...state,
                tasks: action.payload.tasks

            }

        default:
            return state
    }
}