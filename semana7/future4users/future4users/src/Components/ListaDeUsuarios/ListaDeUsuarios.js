import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"


class ListaDeUsuarios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaDeUsuarios: [],
        }
    }


    buscarListaDeUsuarios = () => {
        const listaDeUsuariosPromessa = axios.get(`${baseUrl}/users/getAllUsers`, {
            headers: {
                'api-token': 'string',
            }
        })

        listaDeUsuariosPromessa.then(response => {
            const listaDeUsuarios = response.data.result
            this.setState({ listaDeUsuarios: listaDeUsuarios })
        }).catch(error => {
            alert("Não foi possível buscar a lista de usuários")
            this.setState({listaDeUsuarios: []})
        })
    }


    componentDidMount() {
        this.buscarListaDeUsuarios()
    }

    apagarUsuario = (idDoUsuario) => {
        const promessaApagaUsuario = axios.delete(`${baseUrl}/users/deleteUser?id=${idDoUsuario}`, {
            headers: {
                'api-token': 'string',
            }
        })

        promessaApagaUsuario.then((response) => {
            alert("Usuário foi apagado com sucesso!")
            this.buscarListaDeUsuarios ()
        }).catch((error) => {
            alert("Erro ao apagar usuário")
            console.log(error.response.data.message)
        })
    }

    render() {
        return (
            <ul>
                {this.state.listaDeUsuarios.map(usuario => (
                    <li key={usuario.id}>
                        {usuario.name}
                        <span onClick={() => this.apagarUsuario(usuario.id)}> X </span></li>
                        
                ))}
                
            </ul>
        )
    }
}

export default ListaDeUsuarios