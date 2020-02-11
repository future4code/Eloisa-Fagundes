import React from 'react';
import './SmallCard.css';

function SmallCard(props) {
    return (
        <div>
            <div>
                <img src={props.iconeEmail} />
                <h4>{props.email}</h4>
                <p>{props.meuEmail}</p>

                <img src={props.iconeEndereco} />
                <h4>{props.endereco}</h4>
                <p>{props.meuEndereco}</p>
            </div>


        </div>
    )
}

export default SmallCard