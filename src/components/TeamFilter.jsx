import React, { useState } from "react";
import TeamFilterChar from "./TeamFilterChar";
function TeamFilter({ setFilterButton, setFilter, reset }) {
  const [team, setTeam] = useState(null);

  return (
    <>
      <div id="team_filter_container">
        <div id="team_filter_box">
          {Array.from({ length: 4 }).map((_, idx) => {
            return (
              <TeamFilterChar
                key={`TeamFilterChar_${idx}_${reset}`}
                setTeam={setTeam}
                reset={reset}
              />
            );
          })}
        </div>
        <div className="filter_buttons">
          <button
            className="btn btn-danger"
            onClick={() => {
              setFilterButton(false);
            }}
          >
            Close
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              setFilterButton(false);
              setFilter(team);
            }}
          >
            Filter
          </button>
        </div>
      </div>
    </>
  );
}

export default TeamFilter;
