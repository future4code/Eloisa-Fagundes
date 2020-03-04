import React from 'react'
import PaginaDeCadastro from './Components/PaginaDeCadastro/PaginaDeCadastro'
import ListaDeUsuarios from './Components/ListaDeUsuarios/ListaDeUsuarios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: "cadastro"
    }
  }

  trocarDePagina = () => {
    if (this.state.telaAtual === "cadastro") {
      this.setState({ telaAtual: "lista"})
    } else {
      this.setState({ telaAtual: "cadastro"})
    }
  }


  render() {
    return (
      <div>
        <button onClick={this.trocarDePagina}>
        {this.state.telaAtual === "cadastro" ? ("Ir para página de lista") : ("Ir para cadastro")}
        </button>
        {this.state.telaAtual === "cadastro" ? (<PaginaDeCadastro />) : (<ListaDeUsuarios />)}
      </div>
    )
  }
}

export default App
