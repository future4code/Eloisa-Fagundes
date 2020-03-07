import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

// Eu preciso que você crie uma nova playlist.
// Porque a promessa é uma const? Não deveria ser um let?

// const mockNovaPlaylist = [
//     { name: "Playlist 1" },
//     { name: "Playlist 2" }
// }

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"

class criarPlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
        }
    }

    lidaComMudancaNome = (e) => {
        const novoValor = e.target.value
        this.setState({ name: novoValor })
    }


    lidaComSalvarPlaylist = () => {
        const novaPlaylist = {
            name: this.state.name 
        }
        const promessaNovaPlaylist = axios.post(`${baseUrl}/playlists/createPlaylist`, novaPlaylist, {
            headers:{
                auth: "eloisa",
            }
        })
        promessaNovaPlaylist.then(response => {
            console.log("playlist criada com sucesso!")
        }).catch(error => {
            console.log(error.response.data.message)
        })
        this.props.transferirNome(this.state.name)
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.name}
                    placeholder="recebe nome da playlist"
                    onChange={this.lidaComMudancaNome}>
                </input>
                <button onClick={this.lidaComSalvarPlaylist}>Cria nova Playlist</button>
            </div>
        )
    }
}

export default criarPlaylist
