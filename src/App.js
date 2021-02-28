import React from "react";
import "./style.css";
import background from "https://github.com/Deda2206/MusicNotationLearningApp/blob/master/images/ProjectBackground.png";

export default function App() {
  return (
    <div
      className="container"
      styles={{ backgroundImage: `url(${background})` }}
    >
      <h1>Welcome to Staver</h1>
      <p>Get ready to learn some Music Notation!!</p>
    </div>
  );
}
