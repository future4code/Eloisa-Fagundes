import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const BoxContainer = styled.div`
border: solid 1px black;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0px 500px 0px 500px;
`

const SalvaUsuario = styled.button`
background-color: blue;
margin-top: 10px;
color: white;
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class PaginaDeCadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
        }
    }

    lidaComMudancaNome = (event) => {
        const novoValor = event.target.value
        this.setState({ name: novoValor })
    }

    lidaComMudancaEmail = (event) => {
        const novoValor = event.target.value
        this.setState({ email: novoValor })
    }

    lidaComSalvarUsuario = () => {
        const novoUsuario = {
            name: this.state.name,
            email: this.state.email,
        }

        const promessaDeNovoUsuario = axios.post(`${baseUrl}/users/createUser`, novoUsuario, {
            headers: {
                'api-token': 'string',
            }
        })

        promessaDeNovoUsuario.then(response => {
            alert("Usuário criado com sucesso!")
            console.log(promessaDeNovoUsuario)
        }).catch(error => {
            console.log(error.response.data.message)
        })

    }

    render() {
        return (
            <BoxContainer>
                <div>
                    <span>Nome: </span>
                    <input
                        placeholder="digite aqui seu nome"
                        type="name"
                        onChange={this.lidaComMudancaNome}
                        value={this.state.name}>
                    </input>
                </div>
                <div>
                    <span>E-mail: </span>
                    <input
                        placeholder="digite aqui seu e-mail"
                        type="email"
                        onChange={this.lidaComMudancaEmail}
                        value={this.state.email}>

                    </input>
                </div>
                <SalvaUsuario onClick={this.lidaComSalvarUsuario}>Salvar</SalvaUsuario>
            </BoxContainer>
        )
    }
}

export default PaginaDeCadastro