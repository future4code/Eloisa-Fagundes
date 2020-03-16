import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


// Eu preciso que você insira uma nova música na playlist que o usuário selecionar.
// Para isso, eu preciso dos inputs e de um select para selecionar a playlist onde a música será criada



const mockCadastraNovaMusica = [
{ 
    "name": "lala", 
    "artist": "lele",
    "url": "musica.com"
}
]

class InsereMusicaNaPlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                cadastraNovaMusica:
                [
                    {
                        name: "",
                        artist: "",
                        url: ""
                    }
                ]
        }
    }


    lidaComMudancaDeNome = (e) => {
        const novoValorNome = e.target.value
        this.setState({ name: novoValorNome })
    }

    lidaComMudancaDeArtista = (e) => {
        const novoValorArtista = e.target.value
        this.setState({ artist: novoValorNome })
    }


    lidaComMudancaDeUrl = (e) => {
        const novoValorUrl = e.target.value
        this.setState({ url: novoValorNome })
    }

    lidaComSalvarMusicaNova =  () => {
    const novaMusica = {
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url
    }
    }


    render() {
        return (
            <div>
                <select> Para selecionar a playlist</select>
                <input
                    type="text"
                    value={this.state.name}
                    placeholder="recebe nome da musica"
                    onChange={this.lidaComMudancaNome}>
                </input>
                <input
                    type="text"
                    value={this.state.artist}
                    placeholder="recebe artista da musica"
                    onChange={this.lidaComMudancaDeArtista}>
                </input>
                <input
                    type="text"
                    value={this.state.url}
                    placeholder="recebe url da musica"
                    onChange={this.lidaComMudancaDeUrl}>
                </input>
        <button onClick={this.lidaComSalvarMusicaNova}> Salvar nova música</button>
            </div>
        )
    }
}

export default InsereMusicaNaPlaylist