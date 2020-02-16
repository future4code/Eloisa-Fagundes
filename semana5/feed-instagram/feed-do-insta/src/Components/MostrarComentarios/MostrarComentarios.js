import React from 'react'
import './MostrarComentarios.css'
import Style from 'styled-components'
import styled from 'styled-components'


const CommentContainer = styled.div`
`

const IconAndCount = styled.div`
display: flex;
`

const iconeComentarioFeed = require("../../Icones/comment_icon.svg")

class MostrarComentarios extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  comment = () => {
    this.setState({
      count: this.state.count +1
    })

  }


  render() {
    return (
      <div>
        <IconAndCount>
        <img src={iconeComentarioFeed} alt="comentario" />
        <div>{this.state.count}</div>
        </IconAndCount>
        <CommentContainer>
          <input placeholder="Escreva seu comentário"></input>
          <button onClick={this.comment}>Comentar</button>
        </CommentContainer>
      </div>
    )
  }
}

export default MostrarComentarios