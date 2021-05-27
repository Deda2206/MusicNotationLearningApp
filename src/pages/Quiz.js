import React from "react";

import {playGame,checkAnswer,playAgain} from "./GameSettings";

Quiz();

export default function Quiz(){
 
    return (
      <div>
        <h1><strong>Quiz Page</strong></h1>

          <div>
            <h2>Guess the Music Note!!!</h2>
            <h3> For sharps, enter <strong>#</strong> and for flats enter <strong>b</strong>.</h3>

            <br/>
          
            <img id="imageBox" ></img> <br/>
            <br/>
            <button id="playGame" onClick={playGame}>Play</button>
            <input id="answerText" style={{display: "none"}} type = "text" placeholder="Answer Here"></input>
            
            <button id="answerButton" onClick={checkAnswer} style={{display: "none"}}>SUBMIT</button>
            <p id = "result" style={{display:"none"}}></p>
            <p id = "finalScore" style={{display:"none"}}></p>
            <button id="playAgainButton" onClick={playAgain} style={{display: "none"}}>Play Again?</button>
          </div>
          </div>

    );
 
}
