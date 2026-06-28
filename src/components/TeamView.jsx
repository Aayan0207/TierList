import React, { useEffect, useState } from "react";
import Teams from "../assets/teams";
import TeamCard from "./TeamCard";
import TeamFilter from "./TeamFilter";

const ENTRIES_PER_PAGE = 10;
const MAX_PAGES = Math.ceil(Teams.length / ENTRIES_PER_PAGE) - 1;
let allTeams = Teams.sort((a, b) => b.dps - a.dps);
function TeamView() { 
  const [page, setPage] = useState(0); 
  const [teams, setTeams] = useState(allTeams.slice(0, 10));
  const [filterTeams, setFilterTeams] = useState(true); //Change this to false
  useEffect(() => {
    setTeams(
      allTeams.slice(page * ENTRIES_PER_PAGE, (page + 1) * ENTRIES_PER_PAGE),
    );
  }, [page]);
  return (
    <>
      <div id="team_view" className="centered-v">
        {filterTeams ? <TeamFilter setFilterButton={setFilterTeams}/> : <button className="btn btn-info" onClick={() => setFilterTeams(true)}>Filter Teams</button>}
        {teams.map((team) => {
          return <TeamCard team={team} rank={allTeams.indexOf(team) + 1} />;
        })}
        <div id="pagination_view">
          {page !== 0 ? (
            <div
              id="first_page"
              onClick={() => setPage(0)}
              className="btn btn-info"
            >
              {"|< First"}
            </div>
          ) : (
            ""
          )}
          {page !== 0 ? (
            <div
              id="prev_page"
              onClick={() => setPage((prev) => prev - 1)}
              className="btn btn-info"
            >
              {"< Prev"}
            </div>
          ) : (
            ""
          )}
          <div id="current_page" className="btn btn-dark">
            <select
              id="page_select"
              className="form-select form-select-sm"
              value={page}
              onChange={(event) => setPage(Number(event.target.value))}
            >
              {Array.from({ length: MAX_PAGES + 1 }, (_, i) => {
                return (
                  <option key={i} value={i}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
          </div>
          {page !== MAX_PAGES ? (
            <div
              id="next_page"
              onClick={() => setPage((prev) => prev + 1)}
              className="btn btn-info"
            >
              {"Next >"}
            </div>
          ) : (
            ""
          )}
          {page !== MAX_PAGES ? (
            <div
              id="last_page"
              onClick={() => setPage(MAX_PAGES)}
              className="btn btn-info"
            >
              {"Last >|"}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default TeamView;
