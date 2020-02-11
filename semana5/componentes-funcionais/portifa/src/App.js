import React from 'react';
import './App.css';
import PageSection from './Components/PageSection/PageSection'
import BigCard from './Components/BigCard/BigCard'
import SmallCard from './Components/SmallCard/SmallCard'
import ImageButton from './Components/ImageButton/ImageButton'

function App() {
  return (

    <div className="App">
      <PageSection titulo="Dados Pessoais" />
      <BigCard iconeUser={require("./imagens/1.user-icon.png")} nome="Eloisa" sobreMim="Olá, sou a Eloisa. Sou estudante de Web Full Stack na Future4" />
      <SmallCard iconeEmail={require("./imagens/2.mail-icon.png")} email="E-mail" meuEmail="lola.fernanda@hotmail.com" />
      <SmallCard iconeEndereco={require("./imagens/3.adress-icon.png")} endereco="E-mail" meuEndereco="R dos franceses,147" />
      <ImageButton arrowButton={require("./imagens/arrow-icon.png")} textoBotao="Leia Mais" />
      <PageSection titulo="Experiência" />
      <PageSection titulo="Redes Sociais" />

    </div>
  );
}

export default App;
