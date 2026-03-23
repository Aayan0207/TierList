import React from "react";

function Card({ char }) {
  return (
    <>
      <div className="char_details">
        <img className="char_img" src={`../icons/${char.name}_Icon.webp`}></img>
        <p className="char_name">{char.name}</p>
      </div>
    </>
  );
}

export default Card;
