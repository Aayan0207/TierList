import { useState } from "react";
import "./App.css";
import TeamView from "./components/TeamView";
import ListView from "./components/ListView";

function App() {
  const [listView, setListView] = useState(true);
  const [teamView, setTeamView] = useState(false);
  return (
    <>
      <h1 id="title" className="centered">
        Genshin Tierlist
      </h1>
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
    </>
  );
}

export default App;
