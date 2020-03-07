import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

// Eu preciso que você mostre uma lista com as playlists e que o usuario consiga apagar também.
// Porque essa página não é uma função nem uma classe?

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"

// const mockMostraAsPlaylists = [
//     {
//         id: "1",
//         name:"Playlist 1"
//     },
//     {
//         id: "2",
//         name:"Playlist 2"
//     }
// ]

class ListaDePlaylists extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mostraAsPlaylists: [
                {name:"",
                 id:""
        }
            ],
        }
    }


    buscaNovaPlaylist = () => {
        const listaDePlaylistsPromessa = axios.get(`${baseUrl}/playlists/getAllPlaylists`, {
            headers: {
                auth: "eloisa"
            }
        })

        listaDePlaylistsPromessa.then(response => {
            const mostraTodasAsPlaylists = response.data.result.list
            console.log(response)
            this.setState({ mostraAsPlaylists: mostraTodasAsPlaylists})
           
        }).catch(error => {
            console.log()
            alert("Não foi possível criar sua playlist. Por favor tente na próxima vida.")
            this.setState({ mostraAsPlaylists: []})
        })
    }

    componentDidMount() {
        this.buscaNovaPlaylist()
    }

     componentDidUpdate(previousProps) {
        
             const guardaPlaylist = this.state.mostraAsPlaylists
             if (previousProps.transferirNome !== this.props.transferirNome) {
                  this.buscaNovaPlaylist()
             }
         }
     

    apagarPlaylist = (idDaPlaylist) => {
        const promessaApagarPlaylist = axios.delete(`${baseUrl}/playlists/deletePlaylist?playlistId=s${idDaPlaylist}`, {
            headers: {
                auth: "eloisa",
            }
        })
        promessaApagarPlaylist.then(response => {
            alert("playlist apaga com sucesso!")
        }).catch(error => {
            alert("Não foi possível apagar sua playlist! :(")
            console.log(error.response.data.message)
        })
    }

    render() {
        console.log(this.state.mostraAsPlaylists[this.state.mostraAsPlaylists.length-1].name, this.props.transferirNome)
        return(
            <ul>
                {this.state.mostraAsPlaylists.map (playlist => (
                    <li key={playlist.id}>
                         {playlist.name}
                          <span onClick={()=> this.apagarPlaylist(playlist.id)}>x</span></li>
                ))} 
            </ul>
        )
    }
}

export default ListaDePlaylists



