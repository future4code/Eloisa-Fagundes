import React from 'react'
import styled from 'styled-components'


const BoxContainer = styled.div `
border: solid 1px black;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0px 500px 0px 500px;
`

const SalvaUsuario = styled.button `
background-color: blue;
color: white;
`

class FormCadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <BoxContainer>
                <div>
                    <span>Nome: </span>
                    <input>{this.props.nome}</input>
                </div>
                <div>
                    <span>E-mail: </span>
                    <input>{this.props.email}</input>
                </div>
                <SalvaUsuario>Salvar</SalvaUsuario>
            </BoxContainer>
        )
    }
}

export default FormCadastro