import React from "react";
import PokeCard from "./PokeCard";

// Given an array of objects describing different Pokemon and renders a sequence of PokeCard components
const Pokedex = ({ list }) => {
  // LOGIC
  return (
    <div className="Pokedex">
      <>
        {/* Check on this similar to Shopping List */}
        {list.map((p) => {
          return <PokeCard className="Pokedex-card" id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />;
        })}
      </>
    </div>
  );
};

export default Pokedex;
