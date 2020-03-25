import axios from 'axios'

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

// Soter, pq não precisamos criar um action creator pra essa função e para as outras sim?
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

// Caí no mesmo problema de não conseguir pegar as coisas do array que preciso. Mas pelo menos desta vez ele funcionou rs.
export const getMatches = () => async (dispatch) => {
	const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eloisa/matches")
	console.log(response.data.matches)
	dispatch(setMatchesToList(response.data.matches))
}

 