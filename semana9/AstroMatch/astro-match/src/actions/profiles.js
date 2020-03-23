import axios from 'axios'

//   export const setMatches = (matches) => ({
// 	type: "SET_MATCHES",
// 	payload: {
// 	  matches,
// 	}
//   })
  

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eloisa/clear') 
}

export const setProfileToSwipe = (profile) => ({
	type: "SET_PROFILE_TO_SWIPE",
	payload: {
	  profile,
	}
  })

export const getProfileToSwipe = () => async (dispatch) => {
	const response =  await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eloisa/person')
	// console.log(response.data.profile)
	dispatch(setProfileToSwipe(response.data.profile))
}

// Soter, pq não precisamos criara um action creator pra essa função e para as outras sim?
export const chooseProfile = (id, choice) => async (dispatch) => {
	const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eloisa/choose-person', {
		id, choice
	}) 
	console.log(response.data)
	dispatch(getProfileToSwipe())
}

export const setMatchesToList = (matches) => ({
	type: "SET_MATCHES",
	payload: {
		matches,
	}
})

export const getMatches = () => async (dispatch) => {
	const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eloisa/matches")
	console.log(response.data.id)
	dispatch(setMatchesToList(response.data.matches))
}

 