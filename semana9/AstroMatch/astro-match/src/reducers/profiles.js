import { mdiConsoleNetworkOutline } from "@mdi/js"

const initialState = {
  profileToSwipe: undefined,
}


const profiles = (state = initialState, action) => {
  switch(action.type){
    case "SET_PROFILE_TO_SWIPE":
      return {
        ...state,
        profileToSwipe: action.payload.profile
      }
      default:
      return state
  }
 
}

export default profiles
