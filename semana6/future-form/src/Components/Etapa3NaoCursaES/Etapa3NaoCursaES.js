
import React from 'react'
// import styled from 'styled-components'
import InputPergunta from '../InputPergunta/InputPergunta'
import PageSection from '../PageSection/PageSection'
import SelectPergunta from '../SelectPergunta/SelectPergunta'
import ButtonProximaEtapa from '../ButtonProximaEtapa/ButtonProximaEtapa'


class Etapa3NaoCursaES extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (

            <div>
                <PageSection titulo="ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO" />
                <InputPergunta pergunta="1. Por que não terminou a graduação?" />
                <InputPergunta pergunta="2. Qual unidade de ensino?" />
                <SelectPergunta perguntaDeSelecao="4. Fez algum curso complementar?"
                    opcao1="Curso Técnico"
                    opcao2="Curso de Inglês"
                    opcao3="Não fiz curso complementar" />
                <ButtonProximaEtapa />
            </div>
        )
    }
}

export default Etapa3NaoCursaES