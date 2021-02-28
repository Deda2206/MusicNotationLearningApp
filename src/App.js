import React from "react";
import "./style.css";
import background from "./images/projectBackground.png";

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
