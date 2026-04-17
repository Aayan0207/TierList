import { useState } from "react";
import "./App.css";
import TeamView from "./components/TeamView";
import ListView from "./components/ListView";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div id="title_container" className="centered">
        <h1 id="title">Genshin Tierlist</h1>
      </div>
      <div id="selector" className="centered">
      </div>
      <div id="viewing_area">
         <ListView />
      </div>
      <footer>
        This content is not affiliated with Hoyoverse or its subsidiaries.
      </footer>
      <Analytics />
    </>
  );
}

export default App;
