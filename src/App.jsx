import { useState } from "react";
import "./App.css";
import TeamView from "./components/TeamView";
import ListView from "./components/ListView";

function App() {
  const [listView, setListView] = useState(true);
  const [teamView, setTeamView] = useState(false);
  return (
    <>
      <div id="title_container" className="centered">
        <h1 id="title">Genshin Tierlist</h1>
      </div>
      <div id="selector" className="centered">
        <button
          id="list"
          onClick={() => {
            setListView(true);
            setTeamView(false);
          }}
        >
          List Format
        </button>
        <button
          id="team"
          onClick={() => {
            setListView(false);
            setTeamView(true);
          }}
        >
          Teams Format
        </button>
      </div>
      <div id="viewing_area">
        {listView ? <ListView /> : ""}
        {teamView ? <TeamView /> : ""}
      </div>
      <footer>
        This content is not affiliated with Hoyoverse or its subsidiaries.
      </footer>
    </>
  );
}

export default App;
