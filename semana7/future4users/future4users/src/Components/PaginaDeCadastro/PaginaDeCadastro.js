import React from 'react'
import styled from 'styled-components'
import FormCadastro from '../FormCadastro/FormCadastro'




class PaginaDeCadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <FormCadastro />
            </div>
        )
    }
}

export default PaginaDeCadastro