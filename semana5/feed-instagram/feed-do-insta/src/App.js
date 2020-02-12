import React from 'react';
import './App.css';
import ImagemPrincipal from './Coments/ImagemPrincipal/ImagemPrincipal'
import PageSection from './Coments/PageSection/PageSection'
import MostrarComentarios from './Coments/MostrarComentarios/MostrarComentarios';
import MostrarLikes from './Coments/MostrarLikes/MostrarLikes'

function App() {
  return (
    <div className="Primeiro-Post">
<PageSection titulo="Future4.br"/>
<ImagemPrincipal imagem= { require = ("./Fotos/Post-Rosa.png") } alt="imagem rosa" />
<MostrarLikes iconeCoracao={require = ("./Icones/favourite.svg")} alt="coração de like" />
<MostrarComentarios iconeComentario={require = ("")} alt="comentario" />



<div className="Segundo-Post">
<PageSection titulo="Future4.br"/>
<ImagemPrincipal imagem={require= ("")} alt="" />
<MostrarLikes />
<MostrarComentarios />
    </div>

    </div>



  );
}

export default App;
