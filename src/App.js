import React, { Component } from "react";
import Picture from "./components/Picture";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import pics from "./pics.json"



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pics,
    correctGuesses: 0,
    bestScore: 0,
    heading: "",
    clicked: false,
};



handleIncrement = (id) => {
  this.setState({ clicked: true });
  
  if (this.state.clicked) {
    this.setState({ correctGuesses: this.state.correctGuesses + 1, heading: "You guessed correctly!" });

    if (this.state.correctGuesses > this.state.bestScore) {
      this.setState({ bestScore: this.state.correctGuesses });
    this.setState({correctGuesses: 0, heading: "You guessed incorrectly!" });

    }
    
  } else {
    // this.setState({correctGuesses: 0, heading: "You guessed incorrectly!" });
    /* console.log(this.state.idsClicked); */
  }
  
};

  setClicked = id =>{

    //state pics array
    let pics = this.state.pics;
    
    

      
      //update with random array
      
      this.handleIncrement()
      pics.sort(function(a, b){return 0.5 - Math.random()});
      this.setState({ pics });
      
    }

    




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        <Navbar
        correctGuesses={this.state.correctGuesses}
        bestScore={this.state.bestScore}
        heading={this.state.heading || "Click an image to begin!"}/>
        <div className="container">
          <div className="row">
        {this.state.pics.map(picture => (
          <Picture 
            setClicked={this.setClicked}
            id={picture.id}
            key={picture.id}
            image={picture.image}
            correctGuesses={this.state.correctGuesses}
            handleIncrement={this.handleIncrement}
						handleHighestScore={this.handleHighestScore}
          />
          ))}
          </div>
          </div>
      </>
    );
  };
}



export default App;
