import React from 'react'
import AppContainer from './Container/AppContainer'
import store from './store'

// 1. Crie **action-creators** para todas as actions que você mapeou. 
// 2. Crie o layout estático (O layout não precisa estar relacionado com o da página de referência)

function App() {
  return (
<Provider store = {store}>
    <App />
 </Provider>
  )
}

export default App

