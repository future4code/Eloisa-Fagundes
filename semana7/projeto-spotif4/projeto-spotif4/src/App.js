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

    render () {
      return (
        <div>
          <div>
            <CriarPlaylist></CriarPlaylist>
          </div>
          <div>
            <ListaDePlaylists> </ListaDePlaylists>
          </div>
        </div>
      )
    }
}

export default App;
