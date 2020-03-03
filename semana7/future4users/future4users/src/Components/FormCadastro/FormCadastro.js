import React from 'react'
import styled from 'styled-components'


const BoxContainer = styled.div `
border: solid 1px black;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

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
                <span>Nome: </span>
                <input>{this.props.nome}</input>
                <span>E-mail: </span>
                <input>{this.props.email}</input>
                <SalvaUsuario>Salvar</SalvaUsuario>
            </BoxContainer>
        )
    }
}

export default FormCadastro