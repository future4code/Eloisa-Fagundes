import React from 'react'
import styled from 'styled-components'


class ButtonProximaEtapa extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        clique: false,
        }
    }

cliqueProximaEtapa = ()=> {
this.setState({})


    }

    render (){
        return(
            <div>
                <p>{this.props.pergunta}</p>
                <button onClick={this.cliqueProximaEtapa}>Próxima Etapa</button>
            </div>
        )
    }
}
export default ButtonProximaEtapa