import React from 'react';
import "./Pokecard.css";

const pokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

function Pokecard(props){
    const imgSrc = `${pokeAPI}${props.id}.png`;

    return (
        <div className="Pokecard">
           <div className="Pokecard-title">{props.name}</div> 
           <img alt-text={props.name} src={imgSrc} />
           <div className="Pokecard-data">{props.type} Type</div>
           <div className="Pokecard-data">{props.XP} XP</div> 
        </div>
    );
}

export default Pokecard;