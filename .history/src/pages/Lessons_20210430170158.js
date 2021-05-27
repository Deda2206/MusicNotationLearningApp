import React from "react";
 
function Lessons(){
 
    return (
     
      <div>
        <link rel="stylesheet" href="styles.css"></link>
        <header class="header">
          <h1>Lessons Page</h1>
          <h3 class= "heading1" >The Treble and Bass Clefs</h3>
        </header>
        
        
          <div class="Box">
            <p1>The first symbol you see at the beginning of every Staff in music sheets is called a <strong>'clef'</strong>. There are multiple types of clefs but the main ones used in most music scores are the <strong>TREBLE</strong> and <strong>BASE</strong> clefs.</p1>
          <img src ="./images/TaBimage.jpeg"></img>
          <p2>On the stave lines and in between these line, notes are place to create melodies. This happens because each line and space is a representation of a specific note on the scale. The basic scale is <strong>A</strong> , <strong>B</strong>, <strong>C</strong>, <strong>D</strong>, <strong>E</strong>, <strong>F</strong>, <strong>G</strong>.</p2>
          </div>
      </div>
    );
 
}
export default Lessons;