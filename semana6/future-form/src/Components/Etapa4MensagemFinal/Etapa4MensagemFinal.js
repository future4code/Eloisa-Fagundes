import React from 'react'
import styled from 'styled-components'

class Etapa4MensagemFinal extends React.Component {
    constructor(props){
        super(props)
    }

    render (){
        return(
            <div>
                <h2>{this.props.agradecimento}</h2>
                <p>{this.props.mensagem}</p>
            </div>
        )
    }
}

export default Etapa4MensagemFinal
