import React from 'react'
// import styled from 'styled-components'
import InputPergunta from '../InputPergunta/InputPergunta'
import PageSection from '../PageSection/PageSection'
import SelectPergunta from '../SelectPergunta/SelectPergunta'
import ButtonProximaEtapa from '../ButtonProximaEtapa/ButtonProximaEtapa'



class Etapa1Dados extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            idade: 0,
            email: "",
            grauDeEscolaridade: ""
            ,
        }
    }


    GuardarNome = (event) => {
        let nomeDoUsuario = event.target.value
        this.setState({ nome: nomeDoUsuario })
    }

    GuardarIdade = (event) => {
        let idadeDoUsuario = event.target.value
        this.setState({ idade: idadeDoUsuario })
    }

    GuardarEmail = (event) => {
        let emailDoUsuario = event.target.value
        this.setState({ email: emailDoUsuario })
        console.log(emailDoUsuario)
    }

    GuardarEscolaridade = (event) => {
        let escolaridadeDoUsuario = event.target.value
        this.setState({ escolaridade: escolaridadeDoUsuario })
        console.log(escolaridadeDoUsuario)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <p>1. Qual o seu nome?</p>
                    <input onChange={this.GuardarNome}></input>
                </div>

                <div>
                    <p>2. Qual sua idade?</p>
                    <input onChange={this.GuardarIdade}></input>
                </div>

                <div>
                    <p>3. Qual seu email?</p>
                    <input onChange={this.GuardarEmail}></input>
                </div>
                <div>
                    <p>Qual a sua escolaridade?</p>
                    <form onChange={this.escolaridadeDoUsuario}>
                        <select >
                            <option> -------------- </option>
                            <option>Ensino Médio Completo</option>
                            <option>Ensino Médio Incompleto</option>
                            <option>Ensino Superior Completo</option>
                            <option>Ensino Superior Incompleto</option>
                        </select>

                        <div>
                            <button onClick={this.cliqueProximaEtapa}>Próxima Etapa</button>
                        </div>

                    </form>
                </div>



            </div>


        )
    }
}

export default Etapa1Dados