import React from 'react'
import ListaDeUsuarios from './Components/ListaDeUsuarios/ListaDeUsuarios'
import FormCadastro from './Components/PaginaDeCadastro/PaginaDeCadastro'


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
  const mudaTextoDoBotao = this.state.telaAtual === "cadastro" ? ("Ir para página de lista") : ("Ir para cadastro")
    
  return (
      <div>
        <button onClick={this.trocarDePagina}>{mudaTextoDoBotao}</button>
        {this.state.telaAtual === "cadastro" ? (<FormCadastro />) : (<ListaDeUsuarios />)}
      </div>
    )
  }
}

export default App
