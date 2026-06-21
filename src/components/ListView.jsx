import React, { useState } from "react";
import chars from "../assets/characters.js";
import Card from "./Card.jsx";
function ListView() {
  const ELEMENTS_LENGTH = 7;
  const RARITIES_LENGTH = 2;
  const WEAPONS_LENGTH = 5;
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
    if (rarities.length == RARITIES_LENGTH) {
      setRarities([]);
    }
    setRarities((prev) =>
      prev.includes(rarity)
        ? prev.filter((e) => e !== rarity)
        : [...prev, rarity],
    );
  }
  function isTier(char, tier, role) {
    let charTier = -1;
    switch (role) {
      case "dps":
        charTier = char.role.dps.tier;
        break;
      case "subdps":
        charTier = char.role.subdps.tier;
        break;
      case "support":
        charTier = char.role.support.tier;
        break;
    }
    return (
      charTier == tier &&
      elements.includes(
        char.element.charAt(0).toUpperCase() + char.element.slice(1),
      ) &&
      weapons.includes(
        char.weapon.charAt(0).toUpperCase() + char.weapon.slice(1),
      ) &&
      rarities.includes(char.rarity) &&
      (search != null
        ? char.name.toLowerCase().includes(search.toLowerCase())
        : "")
    );
  }
  function updateWeapons(weapon) {
    if (weapon == "all") {
      setWeapons(["Sword", "Claymore", "Catalyst", "Polearm", "Bow"]);
      return;
    }
    if (weapons.length == WEAPONS_LENGTH) {
      setWeapons([]);
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
    if (elements.length == ELEMENTS_LENGTH) {
      setElements([]);
    }
    setElements((prev) =>
      prev.includes(element)
        ? prev.filter((e) => e !== element)
        : [...prev, element],
    );
  }
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
          <div id="rarity_slider" className="btn-group">
            <button
              className={`btn rarity_slider_button 
              ${rarities.length == RARITIES_LENGTH ? "btn-info active_button" : "btn-dark"}
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
                    className={`btn rarity_slider_button 
              ${rarities.includes(rarity) && rarities.length != RARITIES_LENGTH ? "btn-info active_button" : "btn-dark"}
            `}
                    onClick={() => updateRarity(rarity)}
                  >
                    <b>{rarity}🌟</b>
                  </button>
                </>
              );
            })}
          </div>
          <div id="element_slider" className="btn-group">
            <button
              className={`btn element_slider_button 
              ${elements.length == ELEMENTS_LENGTH ? "active_button btn-info" : "btn-dark"}
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
                      className={`btn element_slider_button 
              ${elements.includes(element) && elements.length != ELEMENTS_LENGTH ? "active_button btn-info" : "btn-dark"}
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
          <div id="weapon_slider" className="btn-group">
            <button
              className={`btn weapon_slider_button 
              ${weapons.length == WEAPONS_LENGTH ? "active_button btn-info" : "btn-dark"}
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
                      className={`btn weapon_slider_button 
              ${weapons.includes(weapon) && weapons.length != WEAPONS_LENGTH ? "active_button btn-info" : "btn-dark"}
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
                <p id={"title" + index} className="tier_title">
                  T-{tier}
                </p>
                <div id={"T" + index} className="tier">
                  <div className="dps">
                    <p className="category">DPS</p>
                    {chars
                      .filter((char) => isTier(char, tier, "dps"))
                      .map((char) => {
                        return <Card char={char} category={"dps"} />;
                      })}
                  </div>
                  <div className="sub_dps">
                    <p className="category">Sub-DPS</p>
                    {chars
                      .filter((char) => isTier(char, tier, "subdps"))
                      .map((char) => {
                        return <Card char={char} category={"subdps"} />;
                      })}
                  </div>
                  <div className="support">
                    <p className="category">Support</p>
                    {chars
                      .filter((char) => isTier(char, tier, "support"))
                      .map((char) => {
                        return <Card char={char} category={"support"} />;
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
