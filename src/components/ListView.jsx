import React from "react";
import chars from "../assets/characters.js";
import Card from "./Card.jsx";
function listView() {
  const tiers = [0, 0.5, 1, 1.5, 2, 3, 4];
  return (
    <>
      <div id="list_view">
        <div id="tiers">
          {tiers.map((tier) => {
            return (
              <>
                <p id={"title" + tier}>T-{tier}</p>
                <div id={"T" + tier} className="tier">
                  <div className="dps">
                    <p className="category">DPS</p>
                    {chars
                      .filter(
                        (char) =>
                          char.tier === tier && char.role.includes("dps"),
                      )
                      .map((char) => {
                        return <Card char={char} />;
                      })}
                  </div>
                  <div className="sub_dps">
                    <p className="category">Sub-DPS</p>
                    {chars
                      .filter(
                        (char) =>
                          char.tier === tier && char.role.includes("sub"),
                      )
                      .map((char) => {
                        return <Card char={char} />;
                      })}
                  </div>
                  <div className="support">
                    <p className="category">Support</p>
                    {chars
                      .filter(
                        (char) =>
                          char.tier === tier && char.role.includes("support"),
                      )
                      .map((char) => {
                        return <Card char={char} />;
                      })}
                  </div>
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
