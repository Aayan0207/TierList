import React from "react";

function Card({ char }) {
  return (
    <>
      <div className="card">
        <div className="char_details">
          <div className="char_info">
            <div className="img_container">
              <img
                className={char.rarity == 4 ? "char_img star_4" : "char_img"}
                src={`../icons/${char.name}_Icon.png`}
              ></img>
            </div>
            <div className="char_name">
              <img
                className="element"
                src={`../icons/Element_${char.element}.webp`}
              ></img>
              {char.name}
              {char.tags.constellation != 0 ? (
                <p className="char_con">(C{char.tags.constellation})</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="char_tags">
            {char.tags.expert ? <p className="char_expert">Expert</p> : ""}
            {char.tags.partner ? <p className="char_partner">Partner</p> : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
