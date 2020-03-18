import React from 'react'
import AppContainer from './Container/AppContainer'
import { Provider } from 'react-redux'
import origemReducer from './Reducers'
import { createStore } from 'redux'

const store = createStore(origemReducer)

// 1. Crie **action-creators** para todas as actions que você mapeou. 
// 2. Crie o layout estático (O layout não precisa estar relacionado com o da página de referência)

function AppStore() {
  return (
<Provider store = {store}>
    <AppContainer />
 </Provider>
  )
}

export default AppStore

