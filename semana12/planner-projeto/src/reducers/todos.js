const initialState = {
    allTasks : [
        {
            text:"Comprar pão",
            day:"Segunda"

        },
        {
            text:"Fazer pão",
            day:"Terça"

        },
        {
            text:"Comer o pão",
            day:"Segunda"

        }
    ]
}


export const todos = (state=initialState, action) => {
    // console.log("action", action)  //excluir
    // console.log("state", state)  //excluir
    switch(action.type) {
        case "ADD_TASK":
            const newTask = {
                id:Date.now(),
                text:action.payload.text
            }
            return {
                allTasks: 
                [
                    newTask,
                    ...state.allTasks
                ]
            }
        

        default:
            return state
    }
}