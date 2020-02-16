import React from 'react'
import './PageSection.css'
import styled from 'styled-components'

const NomeDoUsuario = styled.div`
margin-left: 10px;
`

function PageSection(props) {
  return (
    <NomeDoUsuario>
      <p>{props.titulo}</p>
    </NomeDoUsuario>
  )
}

export default PageSection;