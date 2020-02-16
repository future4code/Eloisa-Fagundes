import React from 'react'
import PageSection from '../PageSection/PageSection'
import ImagemPrincipal from '../ImagemPrincipal/ImagemPrincipal'
import MostrarLikes from '../MostrarLikes/MostrarLikes'
import MostrarComentarios from '../MostrarComentarios/MostrarComentarios'
import styled from 'styled-components'

const PostBox = styled.div`
border: 1px gray solid;
width: 300px;
margin: 10px 0px;
`
const PostActions = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
`

const imagemPrincipal = require("../../Fotos/Post-rosa.png")


function Post() {
    return (
        <PostBox>
            <PageSection titulo="future4.br" />
            <ImagemPrincipal url={imagemPrincipal} />
            <PostActions>
                <MostrarLikes  />
                <MostrarComentarios />
            </PostActions>
        </PostBox>
    )
}

export default Post