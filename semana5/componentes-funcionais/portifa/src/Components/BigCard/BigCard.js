import React from 'react';
import './BigCard.css';

function BigCard(props) {
    return (
        <div>
            <article>
                <img src={props.iconeUser} />
                <h2>{props.nome}</h2>
                <p>{props.sobreMim}</p>
            </article>
        </div>
    )
}

export default BigCard
