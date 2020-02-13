import React from 'react';
import './ImagemPrincipal.css';
import PropTypes from 'prop-types'



function ImagemPrincipal(props) {
    return (
        <div className="minha-foto">
            <p>{props.texto}</p>
            <img src={props.imagem} />
        </div>

    );
}

export default ImagemPrincipal;