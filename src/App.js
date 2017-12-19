import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import rock from "./rock.json";
import RockCard from "./components/RockCard";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  state = {
    rock,
    clickedRocks: [],
    score: 0,
    topScore: 0,
    navMessage: ""
    };

  rockClick = event => {
    let currentRock = event.target.image;
    let RockAlreadyClicked =
      this.state.clickedRocks.indexOf(currentRock) > 0;


    if (RockAlreadyClicked) {
      this.setState({
        rock: this.state.rock.sort(function(a, b) {
          return Math.random()-0.5;
        }),
        clickedRocks: [],
        score: 0,
        navMessage: 'Wrong!'
      });
        alert("Good effort.  But you can do better!");

    } else {
      this.setState(
        {
          rock: this.state.rock.sort(function(a, b) {
            return Math.random()-0.5;
          }),
          clickedRocks: this.state.clickedRocks.concat(
            currentRock
          ),
          score: this.state.score + 1,
          navMessage: 'Correct!',
          topScore: this.state.score + 1


        },
   

        () => {
          if (this.state.score === 20) {
            alert("Congratulations, you won!");
            this.setState({
              rock: this.state.rock.sort(function(a, b) {
                return Math.random()-0.5;
              }),
              clickedRocks: [],
              score: 0,
              navMessage: 'You won!!',
              topScore: 20
            });
          }
        }
      );
    }
  };

 render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header/>
        <div className="wrapper">
          {this.state.rock.map(rock => (
            <RockCard
              rockClick={this.rockClick}
              image={rock.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
