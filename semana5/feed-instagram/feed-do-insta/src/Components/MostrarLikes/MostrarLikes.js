import React from 'react'
import './MostrarLikes.css'

const iconeNotLiked = require("../../Icones/favorite-white.svg")
const iconeLiked = require("../../Icones/favorite.svg")


class MostrarLikes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
      count: 0,
    }
  }

  changeLike = () => {
    if (this.state.liked === false) {
      this.setState({
        liked: true,
        count: this.state.count +1
      })
    } else {
      this.setState({
        liked: false,
        count: this.state.count -1
      })
    }
  }

  render() {
    let icone = iconeNotLiked

    if (this.state.liked === true) {
      icone = iconeLiked
    }

    console.log(this.state)
    return (
      <div onClick={this.changeLike}>
        <img src={icone} alt="coração para curtir" />
        <div> {this.state.count} </div>
      </div>
    )
  }
}

export default MostrarLikes