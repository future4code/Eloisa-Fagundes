import axios from 'axios'


export const setProfileToSwipe = (profile) => ({
	type: "SET_PROFILE_TO_SWIPE",
	payload: {
	  profile,
	}
  })

//   export const setMatches = (matches) => ({
// 	type: "SET_MATCHES",
// 	payload: {
// 	  matches,
// 	}
//   })

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eloisa/clear') 
}

export const getProfileToSwipe = () => async (dispatch) => {
	const response =  await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eloisa/person')
	console.log(response.data.profile)
	dispatch(setProfileToSwipe(response.data.profile))
}

// export const clearSwipes = () => async (dispatch) => {
// 	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eloisa/clear') 
// }
