import React from 'react';
import './MostrarComentarios.css';
import PropTypes from 'prop-types'



function MostrarComentarios(props) {
  return (
    <div>
      <img src={props.iconeComentario} />
    </div>
  );
}

export default MostrarComentarios;