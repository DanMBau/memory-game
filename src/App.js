import React, { Component } from "react";
import Picture from "./components/Picture";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import pics from "./pics.json"


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
        {this.state.pics.map(picture => (
          <Picture
            removeFriend={this.removeFriend}
            id={picture.id}
            key={picture.id}
            image={picture.image}
          />
        ))}
      </>
    );
  }
}



export default App;
