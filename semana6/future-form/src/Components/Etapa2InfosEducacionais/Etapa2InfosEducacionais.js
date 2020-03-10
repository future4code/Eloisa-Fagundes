import React from 'react'
// import styled from 'styled-components'
import InputPergunta from '../InputPergunta/InputPergunta'
import PageSection from '../PageSection/PageSection'
import ButtonProximaEtapa from '../ButtonProximaEtapa/ButtonProximaEtapa'



class Etapa2InfosEducacionais extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (

            <div>
                <PageSection titulo="ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR" />
                <InputPergunta pergunta="1. Qual Curso?" />
                <InputPergunta pergunta="2. Qual unidade de ensino?" />
                <ButtonProximaEtapa />
            </div>
        )
    }
}

export default Etapa2InfosEducacionais