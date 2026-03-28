import React from "react";

function Card({ char }) {
  return (
    <>
      <div className="card">
        <div className="char_details">
          <img
            className={char.rarity == 4 ? "char_img star_4" : "char_img"}
            src={`../icons/${char.name}_Icon.png`}
          ></img>
          <p className="char_name">
            <img
              className="element"
              src={`../icons/Element_${char.element}.webp`}
            ></img>
            {char.name}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
