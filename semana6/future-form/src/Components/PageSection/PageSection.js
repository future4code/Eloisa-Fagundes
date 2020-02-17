import React from 'react';
import styled from 'styled-components'


let Titulo = styled.h1 `
color: gray;
`

function PageSection (props){
    return(
    <Titulo> {props.titulo} </Titulo>
    )
}

export default PageSection