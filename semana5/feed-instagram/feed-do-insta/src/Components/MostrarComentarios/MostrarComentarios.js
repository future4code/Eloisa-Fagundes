import React from 'react'
import './MostrarComentarios.css'


function MostrarComentarios(props) {
  return (
    <div>
      <img src={props.url} alt="comentario" />
    </div>
  )
}

export default MostrarComentarios