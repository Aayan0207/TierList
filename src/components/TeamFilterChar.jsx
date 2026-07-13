import React, { useEffect, useState, useRef } from "react";
import characters from "../assets/characters";
import artifacts from "../assets/artifacts";
import weapons from "../assets/weapons";
import releasedChars from "../assets/released";

let chars = characters
  .filter((char) => releasedChars.has(char.name))
  .sort((a, b) => a.name.localeCompare(b.name));
function TeamFilterChar({ setTeam }) {
  const [selectedChar, setSelectedChar] = useState(null);
  const [selectedArtifacts, setSelectedArtifacts] = useState([null, null]);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [charSearch, setCharSearch] = useState("");
  const [artifactSearch, setArtifactSearch] = useState("");
  const [weaponSearch, setWeaponSearch] = useState("");
  const previousChar = useRef(null);

  useEffect(() => {
    if (!selectedChar) {
      return;
    }
    setTeam((prev) => {
      const updatedTeam = { ...prev };
      if (previousChar?.name !== selectedChar.name) {
        delete updatedTeam[previousChar.name];
      }
      updatedTeam[selectedChar?.name] = {
        weapon: selectedWeapon,
        artifacts: new Set(selectedArtifacts.filter((set) => set)),
      };
      return updatedTeam;
    });
    previousChar.name = selectedChar.name;
  }, [selectedChar, selectedArtifacts, selectedWeapon]);

  return (
    <div className="team_filter_char">
      <div className="team_filter_char_img_container">
        {selectedChar ? (
          <>
            <img
              className={
                selectedChar?.rarity == 4 ? "char_img star_4" : "char_img"
              }
              src={`../icons/${selectedChar?.name}_Icon.png`}
            />
            <div className="char_name">
              {selectedChar.name.replaceAll("_", " ")}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="team_filter_char_details_container">
        <div className="team_filter_char_name_select dropdown">
          <button
            className="team_filter_char_name btn btn-info dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedChar?.name
              ? selectedChar.name.replaceAll("_", " ")
              : "Select Character"}
          </button>
          <ul className="dropdown-menu">
            <li className="px-2 py-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search character..."
                value={charSearch}
                onChange={(event) => {
                  setCharSearch(event.target.value);
                }}
              />
            </li>
            {chars
              .filter((char) => {
                return char.name
                  .toLowerCase()
                  .replaceAll("_", " ")
                  .includes(charSearch.toLowerCase().trim());
              })
              .map((char) => {
                return (
                  <li
                    className="team_filter_char_name_option"
                    onClick={() => setSelectedChar(char)}
                  >
                    <button
                      className="dropdown-item"
                      type="button"
                      key={`team_filter_char_name_option_${char.name}`}
                    >
                      <img
                        className={
                          char.rarity == 4 ? "char_img star_4" : "char_img"
                        }
                        src={`../icons/${char.name}_Icon.png`}
                      />
                      {char.name.replaceAll("_", " ")}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
        {selectedChar ? (
          <>
            <div className="team_filter_char_weapon_select dropdown">
              <button
                className="team_filter_char_weapon btn btn-info dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedWeapon
                  ? selectedWeapon.name.replaceAll("_", " ")
                  : "Select Weapon"}
              </button>
              <ul className="dropdown-menu">
                <li className="px-2 py-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search weapons..."
                    value={weaponSearch}
                    onChange={(event) => {
                      setWeaponSearch(event.target.value);
                    }}
                  />
                </li>
                {Object.values(weapons)
                  .filter((weapon) => {
                    if (weapon.name.startsWith("Any")) {
                      return;
                    }
                    return weapon.name
                      .toLowerCase()
                      .replaceAll("_", " ")
                      .includes(weaponSearch.toLowerCase().trim());
                  })
                  .map((weapon) => {
                    if (weapon.type !== selectedChar?.weapon) {
                      return;
                    }
                    return (
                      <li
                        className="team_filter_char_weapon_option"
                        onClick={() => setSelectedWeapon(weapon)}
                      >
                        <button
                          className="dropdown-item"
                          type="button"
                          key={`team_filter_char_name_option_${weapon.name}`}
                        >
                          <img
                            className={
                              !weapon?.name.match(/^Any_\w*/)
                                ? weapon?.rarity == 5
                                  ? "char_weapon"
                                  : weapon?.rarity == 4
                                    ? "char_weapon char_weapon_4"
                                    : "char_weapon char_weapon_3"
                                : "char_weapon char_weapon_any"
                            }
                            src={`../weapon_icons/Weapon_${weapon?.name}_2nd.png`}
                          ></img>
                          {weapon.name.replaceAll("_", " ")}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
            {Array.from({ length: 2 }).map((_, idx) => {
              return (
                <div className="team_filter_char_artifact_select dropdown">
                  <button
                    className="team_filter_char_artifact btn btn-info dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {selectedArtifacts[idx]
                      ? selectedArtifacts[idx]?.name?.replaceAll("_", " ")
                      : "Select Artifact"}
                  </button>
                  <ul className="dropdown-menu">
                    <li className="px-2 py-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search artifacts..."
                        value={artifactSearch}
                        onChange={(event) => {
                          setArtifactSearch(event.target.value);
                        }}
                      />
                    </li>
                    {Object.values(artifacts)
                      .filter((artifact) => {
                        if (artifact.name === "Any") {
                          return;
                        }
                        return artifact.name
                          .toLowerCase()
                          .replaceAll("_", " ")
                          .includes(artifactSearch.toLowerCase().trim());
                      })
                      .map((artifact) => {
                        return (
                          <li
                            className="team_filter_char_artifact_option"
                            onClick={() =>
                              setSelectedArtifacts(() => {
                                let copy = [...selectedArtifacts];
                                copy[idx] = artifact;
                                return copy;
                              })
                            }
                          >
                            <button
                              className="dropdown-item"
                              type="button"
                              key={`team_filter_char_name_option_${artifact.name}`}
                            >
                              <img
                                className={
                                  artifact?.name !== "Any"
                                    ? artifact?.rarity == 5
                                      ? "char_artifact"
                                      : "char_artifact char_artifact_4"
                                    : "char_artifact char_artifact_any"
                                }
                                src={`../artifact_icons/Item_${artifact?.link}.png`}
                              ></img>
                              {artifact.name.replaceAll("_", " ")}
                            </button>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default TeamFilterChar;
