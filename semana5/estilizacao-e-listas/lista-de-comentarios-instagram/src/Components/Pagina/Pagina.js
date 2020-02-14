import React from 'react';
import proptypes from 'prop-types'
import styled from 'styled-components'
import './Pagina.css';


class Pagina extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "nome-e-autor">
                <h2>{this.props.titulo}</h2>
                <p>autor: {this.props.autor}</p>
            </div>
        )
    }
}

export default Pagina;