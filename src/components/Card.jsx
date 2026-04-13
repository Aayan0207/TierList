import React from "react";

function Card({ char }) {
  return (
    <>
      <div className="card">
        <div className="char_details">
          <div className="img_container">
            <img
              className="element"
              src={`../icons/Element_${char.element}.webp`}
            ></img>
            <img
              className={char.rarity == 4 ? "char_img star_4" : "char_img"}
              src={`../icons/${char.name}_Icon.png`}
            ></img>
            {char.tags.constellation != 0 ? (
              <div className="char_con">C{char.tags.constellation}</div>
            ) : (
              ""
            )}
          </div>
          <div className="char_name">{char.name.split("_").join(" ")}</div>
        </div>
        <div className="char_tags">
          {char.tags.expert ? <p className="char_expert">Expert</p> : ""}
          {char.tags.partner ? (
            <p className="char_partner">
              Partner
              <p className="char_partner_name">({char.tags.partner})</p>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
