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

{/* <img src={require("./imagens/user-icon")} /> */ }
// {props.texto}
{/* <h2>Eloisa</h2>
                <p>Olá, sou a Eloisa. Sou estudante de Web Full Stack na Future4</p> */}