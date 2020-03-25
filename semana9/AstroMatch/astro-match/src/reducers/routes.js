import { mdiConsoleNetworkOutline } from "@mdi/js"

const initialState = {
  currentPage: "SwipeScreen",
  matches: []
};



const matchList = (state=initialState,action) => { 
  switch (action.type) {
  case "UPDATE_CURRENT_PAGE":
    return { currentPage: action.payload.newPage }
    case "SET_MATCHES":
      return {
        ...state,
       matches: action.payload.matches
      }
  default:
    return state;
  }
}



// export default (state = initialState, action) => {

//   switch (action.type) {
//     case "UPDATE_CURRENT_PAGE":
//       return { currentPage: action.payload.newPage }
//       case "SET_MATCHES":
//         return {
//           ...state,
//          matches: action.payload.matches
//         }
//     default:
//       return state;
//   }
// }

export default matchList
