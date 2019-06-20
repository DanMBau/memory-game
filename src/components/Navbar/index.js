import React from "react";


const Navbar = props => (
  <div className="navbar">
    <h3>Memory Game</h3>
    <h3>{props.clickMessage}</h3>
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.correctGuesses} Highscore: {props.bestScore}
    </div>
  </div>
);

export default Navbar;
