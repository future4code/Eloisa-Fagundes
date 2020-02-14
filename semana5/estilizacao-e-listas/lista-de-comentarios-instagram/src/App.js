import React from 'react';
import './App.css';
import MostraLikesEComentarios from './Components/MostraLikesEComentarios/MostraLikesEComentarios'
import ImagemPrincipal from './Components/ImagemPrincipal/ImagemPrincipal'
import Pagina from './Components/Pagina/Pagina'
import Post from './Components/Post/Post'
import proptypes from 'prop-types'
import styled from 'styled-components'



function App() {
  return (
    <div className="App">

    {/* //   <div className="primeiro-post">
    //     <Pagina titulo="Vitrolínea" autor="Eloisa Fagundes"/>
    //     <ImagemPrincipal imagem={require ("./Fotos/Post-rosa.png")} alt="imagem rosa" />
    //     <MostraLikesEComentarios
    //      iconeCoracao={require  ("./Icones/favorite-white.svg")} alt="coração de like"
    //      iconeComentario={require  ("./Icones/comment_icon.svg")} alt="comentario"
    //      />
        
      // </div> */}
<Post />
    </div>
  );
}

export default App;
