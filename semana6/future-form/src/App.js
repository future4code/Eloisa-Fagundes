import React from 'react';
import './App.css';
import Etapa1Dados from './Components/Etapa1Dados/Etapa1Dados'
import Etapa2InfosEducacionais from './Components/Etapa2InfosEducacionais/Etapa2InfosEducacionais';
import Etapa3NaoCursaES from './Components/Etapa3NaoCursaES/Etapa3NaoCursaES';
import Etapa4MensagemFinal from './Components/Etapa4MensagemFinal/Etapa4MensagemFinal';



function App() {
  return (
    <div className="App">
      <Etapa1Dados />
      <Etapa2InfosEducacionais />
      <Etapa3NaoCursaES />
      <Etapa4MensagemFinal 
      agradecimento="O FORMULÁRIO ACABOU" 
      mensagem="Muito obrigado por participar! Entraremos em contato!"/>
    </div>
  )
}

export default App;
