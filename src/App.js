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
    count: [],
  };



  handleClick = (id) => {

    if (this.state.count.includes(id)) {
      // you lose
      this.setState({
        correctGuesses: 0,
        heading: "You guessed incorrectly!",
        count: []
      });

    } else {
      // game continues
      let pics = [...this.state.pics].sort(function (a, b) { return 0.5 - Math.random() });
      console.log('corrGuesses', this.state.correctGuesses);
      
      this.setState({ pics });

      this.setState({
        count: [...this.state.count, id],
        heading: "You guessed correctly!",
        correctGuesses: this.state.correctGuesses + 1,

      });
      console.log('corrGuesses', this.state.correctGuesses);
      if (this.state.correctGuesses >= this.state.bestScore) {
        this.setState({
          bestScore: this.state.correctGuesses + 1
        });

      }
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        <Navbar
          correctGuesses={this.state.correctGuesses}
          bestScore={this.state.bestScore}
          heading={this.state.heading || "Click an image to begin!"} />
        <div className="container">
          <div className="row">
            {this.state.pics.map(picture => (
              <Picture
                id={picture.id}
                key={picture.id}
                image={picture.image}
                handleClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </>
    )
  };
}



export default App;
