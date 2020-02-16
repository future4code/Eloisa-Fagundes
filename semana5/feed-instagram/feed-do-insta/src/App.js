import React from 'react'
import './App.css'
import Post from './Components/Post/Post'
import styled from 'styled-components'

const Feed=styled.div`
align-items:center;
display:flex;
flex-direction:column;
`

function App() {
  return (
    <Feed>
      <Post />
      <Post />
      <Post />
    </Feed>
  )
}

export default App
