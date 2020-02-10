import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="grid">

        <header>
          <h1>FutureTube</h1>
          <input type="text" name="busca" value="Busca">
          </input>
        </header>

        <nav>
          <a href="index.html">Início</a>
          <a href="#">Em alta</a>
          <a href="#">Inscrições</a>
          <a href="#">Originais</a>
          <a href="#">Histórico</a>
        </nav>

        <main>
          <article><img src={require("./imagens/video1.PNG")} type="image" alt="imagem do video 1"></img>Vídeo 1</article>
          <article><img src={require("./imagens/video2.PNG")} type="image" alt="imagem do video 2"></img>Vídeo 2</article>
          <article><img src={require("./imagens/video3.PNG")} type="image" alt="imagem do video 3"></img>Vídeo 3</article>
          <article><img src={require("./imagens/video4.PNG")} type="image" alt="imagem do video 4"></img>Vídeo 4</article>
          <article><img src={require("./imagens/video5.PNG")} type="image" alt="imagem do video 5"></img>Vídeo 5</article>
          <article><img src={require("./imagens/video6.PNG")} type="image" alt="imagem do video 6"></img>Vídeo 6</article>
          <article><img src={require("./imagens/video7.PNG")} type="image" alt="imagem do video 7"></img>Vídeo 7</article>
          <article><img src={require("./imagens/video8.PNG")} type="image" alt="imagem do video 8"></img>Vídeo 8</article>
        </main>


        <div className="footer">
            <h2>Oi, sou seu rodapé!</h2>
        </div>

      </div>
    </div>
  );
}

export default App;
