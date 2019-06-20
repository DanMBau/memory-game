import React, { Component } from "react";
import Picture from "./components/Picture";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import pics from "./pics.json"

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on a picture to gain points! Click on the same one twice and you lose!";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pics,
    correctGuesses,
    bestScore,
    clickMessage
};



  setClicked = id =>{

    //state pics array
    let pics = this.state.pics;
    let clickedPic = pics.filter(pic => pic.id === id);
    
    

      
      //update with random array
      pics.sort(function(a, b){return 0.5 - Math.random()});
      this.setState({ pics });
      this.setState({clickMessage});

    }

  
    




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
        {this.state.pics.map(picture => (
          <Picture 
            setClicked={this.setClicked}
            id={picture.id}
            key={picture.id}
            image={picture.image}
          />
          ))}
          </div>
          </div>
      </>
    );
  };
}



export default App;
