import React, { Component } from "react";
import Picture from "./components/Picture";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import pics from "./pics.json"

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on a movie poster to gain points! Click on the same one twice and you lose!";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pics
  };

 




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
        {this.state.pics.map(picture => (
          <Picture 
            id={picture.id}
            key={picture.id}
            image={picture.image}
          />
          ))}
          </div>
          </div>
      </>
    );
  }
}



export default App;
