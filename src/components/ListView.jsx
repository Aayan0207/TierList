import React, { useState } from "react";
import chars from "../assets/characters.js";
import Card from "./Card.jsx";
function ListView() {
  const tiers = [0, 0.5, 1, 1.5, 2, 3, 4];
  const [search, setSearch] = useState("");
  const [elements, setElements] = useState([
    "Pyro",
    "Electro",
    "Cryo",
    "Geo",
    "Anemo",
    "Dendro",
    "Hydro",
  ]);
  const [weapons, setWeapons] = useState([
    "Sword",
    "Claymore",
    "Catalyst",
    "Polearm",
    "Bow",
  ]);
  const [rarities, setRarities] = useState([4, 5]);

  function updateRarity(rarity) {
    if (rarity == "all") {
      setRarities([4, 5]);
      return;
    }
    setRarities((prev) =>
      prev.includes(rarity)
        ? prev.filter((e) => e !== rarity)
        : [...prev, rarity],
    );
  }
  function updateWeapons(weapon) {
    if (weapon == "all") {
      setWeapons(["Sword", "Claymore", "Catalyst", "Polearm", "Bow"]);
      return;
    }
    setWeapons((prev) =>
      prev.includes(weapon)
        ? prev.filter((e) => e !== weapon)
        : [...prev, weapon],
    );
  }
  function updateElements(element) {
    if (element == "all") {
      setElements([
        "Pyro",
        "Electro",
        "Cryo",
        "Geo",
        "Anemo",
        "Dendro",
        "Hydro",
      ]);
      return;
    }
    setElements((prev) =>
      prev.includes(element)
        ? prev.filter((e) => e !== element)
        : [...prev, element],
    );
  }
  console.log(search);
  return (
    <>
      <div id="list_view">
        <div id="sliders">
          <div id="search_slider">
            <input
              id="search_input"
              type="text"
              placeholder="Search"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            ></input>
          </div>
          <div id="rarity_slider">
            <button
              className={`rarity_slider_button 
              ${rarities.length == 2 ? "active_button" : ""}
            `}
              onClick={() => updateRarity("all")}
            >
              <img
                className="rarity_slider_image"
                src="../icons/asterisk.png"
              ></img>
            </button>
            {[4, 5].map((rarity) => {
              return (
                <>
                  <button
                    key={rarity + "_button"}
                    className={`rarity_slider_button 
              ${rarities.includes(rarity) ? "active_button" : ""}
            `}
                    onClick={() => updateRarity(rarity)}
                  >
                    <b>{rarity}🌟</b>
                  </button>
                </>
              );
            })}
          </div>
          <div id="element_slider">
            <button
              className={`element_slider_button 
              ${elements.length == 7 ? "active_button" : ""}
            `}
              onClick={() => updateElements("all")}
            >
              <img
                className="element_slider_image"
                src="../icons/asterisk.png"
              ></img>
            </button>
            {["Pyro", "Hydro", "Geo", "Dendro", "Anemo", "Cryo", "Electro"].map(
              (element) => {
                return (
                  <>
                    <button
                      key={element + "_button"}
                      className={`element_slider_button 
              ${elements.includes(element) ? "active_button" : ""}
            `}
                      onClick={() => updateElements(element)}
                    >
                      <img
                        className="element_slider_image"
                        src={`../icons/Element_${element}.webp`}
                      ></img>
                    </button>
                  </>
                );
              },
            )}
          </div>
          <div id="weapon_slider">
            <button
              className={`weapon_slider_button 
              ${weapons.length == 5 ? "active_button" : ""}
            `}
              onClick={() => updateWeapons("all")}
            >
              <img
                className="weapon_slider_image"
                src="../icons/asterisk.png"
              ></img>
            </button>
            {["Sword", "Claymore", "Catalyst", "Polearm", "Bow"].map(
              (weapon) => {
                return (
                  <>
                    <button
                      key={weapon + "_button"}
                      className={`weapon_slider_button 
              ${weapons.includes(weapon) ? "active_button" : ""}
            `}
                      onClick={() => updateWeapons(weapon)}
                    >
                      <img
                        className="weapon_slider_image"
                        src={`../icons/Icon_${weapon}.png`}
                      ></img>
                    </button>
                  </>
                );
              },
            )}
          </div>
        </div>
        <div id="tiers">
          {tiers.map((tier, index) => {
            return (
              <>
                <p id={"title" + index} className="tier_title">T-{tier}</p>
                <div id={"T" + index} className="tier">
                  <p className="category_dps">DPS</p>
                  <div className="dps">
                    {chars
                      .filter(
                        (char) =>
                          char.tier === tier &&
                          char.role.includes("dps") &&
                          elements.includes(char.element) &&
                          weapons.includes(char.weapon) &&
                          rarities.includes(char.rarity) &&
                          (search != null
                            ? char.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            : ""),
                      )
                      .map((char) => {
                        return <Card char={char} />;
                      })}
                  </div>
                  <p className="category_sub_dps">Sub-DPS</p>
                  <div className="sub_dps">
                    {chars
                      .filter(
                        (char) =>
                          char.tier === tier &&
                          char.role.includes("sub") &&
                          elements.includes(char.element) &&
                          weapons.includes(char.weapon) &&
                          rarities.includes(char.rarity) &&
                          (search != null
                            ? char.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            : ""),
                      )
                      .map((char) => {
                        return <Card char={char} />;
                      })}
                  </div>
                  <p className="category_support">Support</p>
                  <div className="support">
                    {chars
                      .filter(
                        (char) =>
                          char.tier === tier &&
                          char.role.includes("support") &&
                          elements.includes(char.element) &&
                          weapons.includes(char.weapon) &&
                          rarities.includes(char.rarity) &&
                          (search != null
                            ? char.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            : ""),
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

export default ListView;
