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
      newName:'name'
    } 
  }


  transferirNome = (name1) => {
    console.log(name1)
    this.setState({ newName: name1})
  }

    render () {
      return (
        <div>
          <div>
          <CriarPlaylist 
           transferirNome={this.transferirNome}
          >
            
          </CriarPlaylist>
          </div>
          <div>
            <ListaDePlaylists 
             transferirNome={this.state.newName}
            > 
            </ListaDePlaylists>
          </div>
        </div>
      )
    }
}

export default App;
