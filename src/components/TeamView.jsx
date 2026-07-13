import React, { useEffect, useState } from "react";
import Teams from "../assets/teams";
import TeamCard from "./TeamCard";
import TeamFilter from "./TeamFilter";
import releasedChars from "../assets/released";

const ENTRIES_PER_PAGE = 10;
const BASE_TEAMS = Teams.filter((team) =>
  team.members.isSubsetOf(releasedChars),
).sort((a, b) => b.dps - a.dps);
function TeamView() {
  const [maxPages, setMaxPages] = useState(
    Math.ceil(BASE_TEAMS.length / ENTRIES_PER_PAGE) - 1,
  );
  const [page, setPage] = useState(0);
  const [allTeams, setAllTeams] = useState(BASE_TEAMS);
  const [teams, setTeams] = useState(BASE_TEAMS.slice(0, 10));
  const [filterTeams, setFilterTeams] = useState(false);
  const [filter, setFilter] = useState(null);
  const [reset, setReset] = useState(false);

  function filterTeam(team) {
    for (let [char, data] of Object.entries(filter)) {
      const charData = team.characters[char];
      if (data.weapon && data.weapon?.name !== charData.weapon?.name) {
        return false;
      } else if (
        data.artifacts &&
        !data.artifacts.isSubsetOf(charData.artifact)
      ) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    setTeams(
      allTeams.slice(page * ENTRIES_PER_PAGE, (page + 1) * ENTRIES_PER_PAGE),
    );
  }, [page, allTeams]);

  useEffect(() => {
    setMaxPages(Math.ceil(allTeams.length / ENTRIES_PER_PAGE) - 1);
    setPage(0);
  }, [allTeams]);

  useEffect(() => {
    if (!filter) {
      return;
    }
    let filteredMembers = new Set(Object.keys(filter));
    let filteredTeams = allTeams.filter((team) =>
      filteredMembers.isSubsetOf(team.members),
    );
    filteredTeams = filteredTeams.filter((team) => filterTeam(team));
    setAllTeams(filteredTeams);
  }, [filter]);

  return (
    <>
      <div id="team_view" className="centered-v">
        {filterTeams ? (
          <TeamFilter
            key="TeamFilter"
            setFilterButton={setFilterTeams}
            setFilter={setFilter}
            reset={reset}
          />
        ) : (
          <div className="filter_buttons">
            <button
              className="btn btn-info"
              onClick={() => {
                setFilterTeams(true);
                setFilter(null);
                setAllTeams(BASE_TEAMS);
              }}
            >
              Filter Teams
            </button>
            {filter ? (
              <button
                className="btn btn-danger"
                onClick={() => {
                  setReset((prev) => !prev);
                  setFilter(null);
                  setAllTeams(BASE_TEAMS);
                }}
              >
                Reset Filters
              </button>
            ) : (
              ""
            )}
          </div>
        )}
        {teams.map((team, idx) => {
          return (
            <TeamCard
              key={`TeamCard_${idx}`}
              team={team}
              rank={BASE_TEAMS.indexOf(team) + 1}
            />
          );
        })}
        {teams.length > 0 ? (
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
                {Array.from({ length: maxPages + 1 }, (_, i) => {
                  return (
                    <option key={i} value={i}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
            </div>
            {page !== maxPages ? (
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
            {page !== maxPages ? (
              <div
                id="last_page"
                onClick={() => setPage(maxPages)}
                className="btn btn-info"
              >
                {"Last >|"}
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div id="no_teams_alert" className="alert alert-warning">
            <h1>No teams found!</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default TeamView;
