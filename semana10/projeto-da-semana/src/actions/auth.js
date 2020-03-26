import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from "../containers/Router/index"


export const login = (email, password) => async (dispatch) => {

    const loginData = {
        email,
        password
    }

    try {
        const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureX/eloisa/login", loginData)

        const token = response.data.token

        window.localStorage.setItem("token", token)
        dispatch(push(routes.root))

    } catch (error) {
        console.error("Caiu o login", error)
    }
}