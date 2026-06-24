import React from "react";
import TeamCharCard from "./TeamCharCard";
import chars from "../assets/characters";
function TeamCard({ team, rank }) {
  let cardColor = "";
  let char_data = chars.find((char) => char.name === team?.characters?.[0].name);
  let element = char_data?.element;
  switch (element) {
    case "Pyro":
      cardColor = "pyro";
      break;
    case "Cryo":
      cardColor = "cryo";
      break;
    case "Electro":
      cardColor = "electro";
      break;
    case "Hydro":
      cardColor = "hydro";
      break;
    case "Dendro":
      cardColor = "dendro";
      break;
    case "Anemo":
      cardColor = "anemo";
      break;
    case "Geo":
      cardColor = "geo";
      break;
  }
  return (
    <>
      <div className="team_card_container">
        <div className={`team_rank_container team_card_title team_card_title_${cardColor}`}>
          <div className={`team_card_title team_card_title_${cardColor} rank_text`}>Rank</div>
          <div className="team_rank">{rank}</div>
        </div>
        <div className={`team_card  team_card_${cardColor}`}>
          <div className={`team_card_title team_card_title_${cardColor}`}>
            {team.title}
          </div>
          <div className={`team_card_view team_card_view_${cardColor}`}>
            {team.characters.map((char) => {
              return <TeamCharCard char={char} />;
            })}
          </div>
          {team.rotation ? (
            <div
              className={`team_card_rotation team_card_rotation_${cardColor}`}
            >
              {team.rotation}
            </div>
          ) : (
            ""
          )}
          {team.notes ? (
            <div className={`team_card_notes team_card_notes_${cardColor}`}>
              {team.notes}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default TeamCard;
