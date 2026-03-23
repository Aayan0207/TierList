import React from "react";
import chars from "../assets/characters.js";
import Card from "./Card.jsx";
function listView() {
  const tiers = [0, 0.5, 1, 1.5, 2, 3, 4];
  return (
    <>
      <div id="list_view" className="centered-v">
        List View
        <div id="tiers">
          {tiers.map((tier) => {
            return (
              <>
              T{tier}
              <div id={tier} className="centered">
                {chars
                  .filter((char) => char.tier === tier)
                  .map((char) => {
                    return <Card char={char} />;
                  })}
              </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default listView;
