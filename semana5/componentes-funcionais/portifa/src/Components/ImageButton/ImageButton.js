import React from 'react';
import './ImageButton.css';

function ImageButton(props) {
    return (
        <div>
            <button><img src={props.arrowButton} /> LeiaMais </button>
        </div>
    )
}

export default ImageButton