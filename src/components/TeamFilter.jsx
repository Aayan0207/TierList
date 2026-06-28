import React from "react";
import TeamFilterChar from "./TeamFilterChar";
function TeamFilter({ setFilterButton }) {
  return (
    <>
      <div id="team_filter_container">
        <div id="team_filter_box">
          {Array.from({ length: 4 }).map(() => {
            return <TeamFilterChar />;
          })}
        </div>
        <button className="btn btn-danger">Reset Filters</button>
        <button
          className="btn btn-success"
          onClick={() => setFilterButton(false)}
        >
          Filter
        </button>
      </div>
    </>
  );
}

export default TeamFilter;
