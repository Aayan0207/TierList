import "./App.css";
import ListView from "./components/ListView";
import { Analytics } from "@vercel/analytics/react";
import React, { useState } from "react";
import TeamCard from "./components/TeamCard";
import TeamView from "./components/TeamView";
function App() {
  const [listView, setListView] = useState(true);
  const [teamView, setTeamView] = useState(false);
  return (
    <>
      <div id="title_container" className="centered">
        <h1 id="title" className="btn btn-dark">Genshin Tierlist</h1>
      </div>
      <div id="viewing_area">
        {listView ? <ListView /> : ""}
        {teamView ? <TeamView /> : ""}
      </div>
      <footer>
        This content is not affiliated with Hoyoverse or its subsidiaries.
      </footer>
      <Analytics />
    </>
  );
}

export default App;
