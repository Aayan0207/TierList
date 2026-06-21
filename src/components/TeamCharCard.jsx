import React from "react";
import chars from "../assets/characters";
function TeamCharCard({ char }) {
  let char_data;
  char_data = chars.find((character) => character.name === char.name);
  return (
    <>
      <div className="char_card">
        <div className="char_details">
          <div className="img_container">
            <img
              className="element"
              src={`../icons/Element_${char_data.element}.webp`}
            ></img>
            <img
              className={
                char_data.rarity == 4
                  ? "char_img star_4 char_team_img"
                  : "char_img char_team_img"
              }
              src={`../icons/${char_data.name}_Icon.png`}
            ></img>
            {char.constellation != 0 ? (
              <div className="char_con">C{char.constellation}</div>
            ) : (
              ""
            )}
          </div>
          <div className="char_name">{char_data.name.split("_").join(" ")}</div>
          <div className="char_role">
            {
              {
                dps: "DPS",
                subdps: "Sub-DPS",
                support: "Support",
              }[char.role]
            }
          </div>
        </div>
        <div className="char_equipment">
          <div className="char_weapon_container">
            <img
              className={
                char.weapon.rarity == 5
                  ? "char_weapon"
                  : "char_weapon char_weapon_4"
              }
              src={`../weapon_icons/Weapon_${char.weapon.name}_2nd.png`}
            ></img>
          </div>
          <div className="char_artifact_container">
            <img
              className={
                char.artifact.rarity == 5
                  ? "char_artifact"
                  : "char_artifact char_artifact_4"
              }
              src={`../artifact_icons/Item_${char.artifact.link}.png`}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCharCard;
