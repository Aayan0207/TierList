import React from "react";

function Card({ char, category }) {
  let char_data;
  switch (category) {
    case "dps":
      char_data = char.role.dps.tags;
      break;
    case "subdps":
      char_data = char.role.subdps.tags;
      break;
    case "support":
      char_data = char.role.support.tags;
      break;
  }
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
            {char_data.constellation != 0 ? (
              <div className="char_con">C{char_data.constellation}</div>
            ) : (
              ""
            )}
          </div>
          <div className="char_name">{char.name.split("_").join(" ")}</div>
        </div>
        <div className="char_tags">
          {char_data.expert ? <p className="char_expert">Expert</p> : ""}
          {char_data.partner ? (
            <p className="char_partner">
              Partner
              <p className="char_partner_name">({char_data.partner})</p>
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
