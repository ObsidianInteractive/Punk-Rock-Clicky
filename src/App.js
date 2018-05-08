import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import matches from "./matchcards.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Begin by clicking a Band Pic.";

class App extends Component {
    
    state = {
        matches,
        correctGuesses,
        bestScore,
        clickMessage
    };

    setClicked = id => {

        const matches = this.state.matches;

    
        const clickedMatch = matches.filter(match => match.id === id);

 
        if (clickedMatch[0].clicked){

            console.log ("Correct Guesses: " + correctGuesses);
            console.log ("Best Score: " + bestScore);

            correctGuesses = 0;
            clickMessage = "You Suck."

            for (let i = 0 ; i < matches.length ; i++){
                matches[i].clicked = false;
            }

            this.setState({clickMessage});
            this.setState({ correctGuesses });
            this.setState({matches});

            } else {

        
            clickedMatch[0].clicked = true;

      
            correctGuesses++;
            
            clickMessage = "Oi! Way to go!!!s.";

            if (correctGuesses > bestScore){
                bestScore = correctGuesses;
                this.setState({ bestScore });
            }

     
            matches.sort(function(a, b){return 0.5 - Math.random()});

            this.setState({ matches });
            this.setState({correctGuesses});
            this.setState({clickMessage});
        }
    };

        render() {
        return (
           <div> 
           <Navbar 
           clickMessage={this.state.clickMessage}
         correctGuesses={this.state.correctGuesses}
          bestScore={this.state.bestScore}
            />
         <Header/>
            <Wrapper>
                     {this.state.matches.map(match => (
                    <MatchCard
                        setClicked={this.setClicked}
                        id={match.id}
                        key={match.id}
                        image={match.image}
                    />
                ))}
                          
            </Wrapper>
            <Footer/>
            </div>


        );
    }
}

export default App;
