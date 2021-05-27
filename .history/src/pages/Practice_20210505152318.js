import { render } from "react-dom"
VF = Vex.Flow;

  var div = document.getElementById("boo");
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  renderer.resize(500,500);

  var context = renderer.getContext();

export default function stave(){
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(10, 40, 400);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();
  return(
    <div id="boo"></div>
  )

}