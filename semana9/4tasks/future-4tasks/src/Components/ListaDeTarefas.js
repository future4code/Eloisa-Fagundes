import React from 'react'
import { connect } from 'react-redux'


class ListaDeTarefas extends React.Component {

    render (){
        console.log(this.props.listaDeAfazeres)
        return (
            <div>
            <ul>
           {this.props.listaDeAfazeres.map(tarefa => 
           <li key={tarefa.id}>{ tarefa.text }</li>
           )} 
            <span 
            // onClick={() => props.dispatch(removerTarefa())}
            > 
             -X-
            </span> 
        </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
   listaDeAfazeres: state.tarefas.listaDeTarefas
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaDeTarefas)