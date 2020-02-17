import React from 'react';
import './App.css';
import Etapa1DadosGerais from './Components/Etapa1DadosGerais/Etapa1DadosGerais'
import Etapa2InfosEducacionais from './Components/Etapa2InfosEducacionais/Etapa2InfosEducacionais';
import Etapa3NaoCursaES from './Components/Etapa3NaoCursaES/Etapa3NaoCursaES';
import Etapa4MensagemFinal from './Components/Etapa4MensagemFinal/Etapa4MensagemFinal';


function App() {
  return (
    <div className="App">
      <Etapa1DadosGerais />
      <Etapa2InfosEducacionais />
      <Etapa3NaoCursaES />
      <Etapa4MensagemFinal 
      agradecimento="O FORMULÁRIO ACABOU" 
      mensagem="Muito obrigado por participar! Entraremos em contato!"/>
    </div>
  );
}

export default App;
