import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

// Eu preciso que você mostre os detalhes da playlist
// 1Bug: infsDaPlaylist está undefined. O console.log da linha 49 mostra que eu estou pegando (de novo)
// um objeto e não a lista de array que eu preciso. 

const mockDetalhesDaPlaylist = [ 
    {
        "id": "1", 
        "name": "lalala", 
        "artist": "lelele",
        "url": "musica.com",
    }
]

class DetalhesDaPlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // infosDaPlaylist: 
            // [
            //     {
            //         name: "",
            //         artist: "",
            //         url: "",
            //         id: ""
            //     }
            // ]
        }
    }


    // lidaComMudancaDeNome = (e) => {
    //     const novoValorNome = e.target.value
    //     this.setState({ name: novoValorNome })
    // }

   lidaComMostrarDetalhesDaplaylist = () => {
       const playlistAtual = {
           name: this.state.name,
           artist: this.state.artist,
           url: this.state.url
       }
   }


    render() {
        console.log(mockDetalhesDaPlaylist)
        return (
            <div>
                <span>{this.mockDetalhesDaPlaylist} Aqui vai os detalhes da playlist</span>
            </div>
        )
    }
}

export default DetalhesDaPlaylist