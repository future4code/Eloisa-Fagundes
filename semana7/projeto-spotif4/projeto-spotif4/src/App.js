import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CriarPlaylist from './Components/CriarPlaylist'
import ListaDePlaylists from './Components/ListaDePlaylists'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
    } 
  }


  // transferirNome = (name) => {
  //   console.log(name)
  // }

  lidacomMudancaDeTela = () => {
    if(this.state.telaAtual === 'criar nova playlist') {
      this.setState({telaAtual: 'mostrar minhas playlists'})
    } else {
      this.setState({telaAtual:'criar nova playlist'})
    }
  }


    render () {
      const textoDoBotao = this.state.telaAtual === 'criar nova playlist' ? 'mostrar minhas playlists': 'Criar nova Playlist'
      return (
        <div>
          <div>
            <button onClick={this.lidacomMudancaDeTela}>{textoDoBotao}</button>
            {this.state.telaAtual === 'criar nova playlist' ? <CriarPlaylist 
            transferirNome={this.transferirNome}/> : <ListaDePlaylists />  }
          </div>
          <div>
          </div>
        </div>
      )
    }
}

export default App;

//  