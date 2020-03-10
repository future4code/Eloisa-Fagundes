import React from 'react';
import './App.css';
import styled from 'styled-components'
// import ListaDeTarefas from './ListaDeTarefas.js/ListaDeTarefas'
import ListaDeTarefasBullets from './ListaDeTarefasBullets/ListaDeTarefasBullets'


const Container = styled.div `
display: flex;
flex-direction:column;
align-items:center;
`

function App() {
  return (
    <Container>
     <ListaDeTarefasBullets />
    </Container>
  );
}

export default App;
