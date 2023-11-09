import React from "react";
import PokeList from "./PokeList";
import Pokedex from "./Pokedex";
import "./App.css";

// UPDATE STYLING TO MAKE PAGE LOOK LIKE EXAMPLE EXERCISE. CARDS SHOULD BE TWO ROWS FOUR COLUMNS BACKGROUND GRAY CENTER CONTENT IN CARD, etc.

function App() {
  return (
    <div className="App">
      <Pokedex list={PokeList} />
    </div>
  );
}

export default App;

// {
/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */
// }
