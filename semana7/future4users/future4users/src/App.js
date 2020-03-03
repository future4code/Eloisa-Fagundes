import React from 'react'
import PaginaDeCadastro from './Components/PaginaDeCadastro/PaginaDeCadastro'
import ListaDeUsuarios from './Components/ListaDeUsuarios/ListaDeUsuarios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: "cadastro",
      textoDoBotao: "Ir para página de lista"
    }
  }

  trocarDePagina = () => {
    if (this.state.telaAtual === "cadastro") {
      this.setState({ telaAtual: "lista"})
    } else {
      this.setState({ telaAtual: "cadastro"})
    }
  }

  trocaTextoDoBotao = () => {
    if (this.state.telaAtual === "cadastro") {
      this.setState({ textoDoBotao: "Ir para página de lista" })
    } else {
      this.setState ({textoDoBotao: "Ir para cadastro"})
    }
  }


  render() {
    return (
      <div>
        <button text={this.textoDoBotao} onClick={this.trocarDePagina}></button>
        {this.state.telaAtual === "cadastro" ? (<PaginaDeCadastro />) : (<ListaDeUsuarios />)}
      </div>
    )
  }
}

export default App
