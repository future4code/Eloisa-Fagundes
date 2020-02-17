import React from 'react'
// import styled from 'styled-components'
import InputPergunta from '../InputPergunta/InputPergunta'
import PageSection from '../PageSection/PageSection'
import SelectPergunta from '../SelectPergunta/SelectPergunta'
import ButtonProximaEtapa from '../ButtonProximaEtapa/ButtonProximaEtapa'



class Etapa1DadosGerais extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PageSection titulo="ETAPA 1 - DADOS GERAIS" />
                <InputPergunta pergunta="1. Nome" />
                <InputPergunta pergunta="2. Idade" />
                <InputPergunta pergunta="3. E-mail" />
                <SelectPergunta perguntaDeSelecao="4. Grau de Escolaridade"
                    opcao1="Ensino Médio Completo"
                    opcao2="Ensino Médio Incompleto"
                    opcao3="Ensino Superior Completo"
                    opcao4="Ensino Superior Incompleto"
                />
                <ButtonProximaEtapa />
            </div>
        )
    }
}

export default Etapa1DadosGerais