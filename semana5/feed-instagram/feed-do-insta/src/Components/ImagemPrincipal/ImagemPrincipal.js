import React from 'react'
import './ImagemPrincipal.css'
import styled from 'styled-components'

const Imagem = styled.img`
width: 100%;
`

function ImagemPrincipal(props) {
    return (
        <div className="minha-foto">
            <p>{props.texto}</p>
            <Imagem src={props.url} alt="imagem do post" />
        </div>

    )
}

export default ImagemPrincipal