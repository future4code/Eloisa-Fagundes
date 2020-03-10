import React from 'react';


class SelectPergunta extends React.Component {
    constructor(props){
        super(props)
    }

    render (){
        return(
            <div>
                <p>{this.props.perguntaDeSelecao}</p>
                <select>
                    <option>  </option>
                    <option> {this.props.opcao1}</option>
                    <option> {this.props.opcao2}</option>
                    <option> {this.props.opcao3}</option>
                    <option> {this.props.opcao4}</option>
                </select>
            </div>
        )
    }
}
export default SelectPergunta