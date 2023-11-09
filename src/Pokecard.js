import React from "react";
import "./PokeCard.css";

const PokeCard = ({ id, name, type, base_experience }) => {
  return (
    <div className="PokeCard" id={id}>
      <h4 className="PokeCard-title">{name}</h4>
      <img className="PokeCard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} width="200" />
      <ul>
        <li className="PokeCard-li">Type: {type}</li>
        <li className="PokeCard-li">Exp: {base_experience}</li>
      </ul>
    </div>
  );
};

export default PokeCard;
