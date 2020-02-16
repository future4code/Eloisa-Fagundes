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
      showComment: false
    }
  }

  comment = () => {
    this.setState({
      count: this.state.count + 1
    })
    this.showComment()
  }

  showComment = () => {
    this.setState({
      showComment: !this.state.showComment
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <IconAndCount>
          <img onClick={this.showComment} src={iconeComentarioFeed} alt="comentario" />
          <div>{this.state.count}</div>
        </IconAndCount>
        {this.state.showComment &&
          (<CommentContainer>
            <input placeholder="Escreva seu comentário"></input>
            <button onClick={this.comment}>Comentar</button>
          </CommentContainer>)}
      </div>
    )
  }
}

export default MostrarComentarios