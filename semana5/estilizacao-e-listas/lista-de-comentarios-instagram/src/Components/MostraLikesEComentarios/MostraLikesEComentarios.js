import React from 'react';
import proptypes from 'prop-types'
import styled from 'styled-components'
import './MostraLikesEComentarios.css';


class MostraLikesEComentarios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contagemComentarios: 0,
            contagemLikes: 0,
        }
    }


    // e = event
    aoClicarNoLike = (event) => {
        const novaQuantidadeDeLikes = this.state.contagemLikes +1
        this.setState ({
            contagemLikes: novaQuantidadeDeLikes
        })
    }




    //     if (event.target.clicado) {
    //         this.setState({ 
    //             contagemLikes: this.state.contagemLikes +1
    //         })
    //     } else {
    //         this.setState({
    //             contagemLikes: this.state.contagemLikes -1
    //         })
    //     }
    // }

    render() {
        return (
            <div className="comentarios-e-likes">

                <div className="likes">
                    <button onClick={this.aoClicarNoLike} >
                        <p>{this.state.contagemLikes}
                        <img src={this.props.iconeCoracao} />
                        </p>
                    </button>
                </div>

                <div className="comentario">
                    <button>
                        <img src={this.props.iconeComentario} />
                    </button>
                </div>
            </div>

        )
    }
}
export default MostraLikesEComentarios;