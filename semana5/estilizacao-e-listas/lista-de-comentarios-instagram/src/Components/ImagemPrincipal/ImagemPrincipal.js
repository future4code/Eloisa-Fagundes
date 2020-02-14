import React from 'react';
import proptypes from'prop-types'
import styled from 'styled-components'
import './ImagemPrincipal.css';


class ImagemPrincipal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="minha-foto">
            <img src={this.props.imagem} />
        </div>
        )
    }
}
export default ImagemPrincipal;