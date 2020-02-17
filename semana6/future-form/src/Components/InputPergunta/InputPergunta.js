import React from 'react';
import styled from 'styled-components'


const CampoInput = styled.input`
margin-top: 1px;
`
class InputPergunta extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render (){
        return(
            <div>
                <p>{this.props.pergunta}</p>
                <CampoInput></CampoInput>
            </div>
        )
    }
}
export default InputPergunta