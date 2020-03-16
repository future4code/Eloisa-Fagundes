import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

// Eu preciso que você mostre uma lista com as playlists e que o usuario consiga apagar também.
// Porque essa página não é uma função nem uma classe? Drrr... é UMA CLASSE, SIM!
// Bug1: Lista Não aparece, pois o array mostraPlaylist aparece undefined(R: colocar.list para pegar somente o array de lista)
// Bug2: Loop infinito depois de usar o componentDidUpdate
// Na verdade, o problema não está no didUpdate, está na função buscaNovaPlaylist
// Bug3: Botão de deletar não funciona (R: esqueci o s de string no id)

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"

const BoxDeConteudo = styled.div`
padding: 10vw;
`

const DeletaPlaylist = styled.span `
color:red;
font-style: oblique;
`
class ListaDePlaylists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mostraAsPlaylists: [
                {
                    name: "",
                    id: ""
                }
            ]
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
            this.setState({ mostraAsPlaylists: mostraTodasAsPlaylists})
            console.log(response)
        }).catch(error => {
            console.log()
            alert("Não foi possível criar sua playlist. Por favor tente na próxima vida.")
            this.setState({ mostraAsPlaylists: []})
        })
    }

    componentDidMount() {
        this.buscaNovaPlaylist()
    }
     

    apagarPlaylist = (idDaPlaylist) => {
        const promessaApagarPlaylist = axios.delete(`${baseUrl}/playlists/deletePlaylist?playlistId=${idDaPlaylist}`, {
            headers: {
                auth: "eloisa",
            }
        })
        promessaApagarPlaylist.then(response => {
            alert("playlist apaga com sucesso!")
            this.buscaNovaPlaylist()
        }).catch(error => {
            alert("Não foi possível apagar sua playlist! :(")
            console.log(error.response.data.message)
        })
    }

    render() {
        console.log(this.state.mostraAsPlaylists[this.state.mostraAsPlaylists.length-1].name)
        return(
            <BoxDeConteudo>
            <ul>
                {this.state.mostraAsPlaylists.map (playlist => (
                    <li key={playlist.id}>
                         {playlist.name}
                          <DeletaPlaylist onClick={()=> this.apagarPlaylist(playlist.id)}> X</DeletaPlaylist></li>
                ))} 
                <hr />
            </ul>
            </BoxDeConteudo>
            )
    }
}

export default ListaDePlaylists



