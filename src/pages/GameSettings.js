


    var imageList =[
    {name:'A', image:'/noteImages/bass-Bbmajor-A.png'},
    {name:'C', image:'/noteImages/bass-Bbmajor-C.png'},
    {name:'D', image:'/noteImages/bass-Bbmajor-D.png'},
    {name:'Eb', image:'/noteImages/bass-Bbmajor-Eb.png'},
    {name:'F', image:'/noteImages/bass-Bbmajor-F.png'},
    {name:'G', image:'/noteImages/bass-Bbmajor-G.png'},
    {name:'Bb', image:'/noteImages/bass-Bbmajor-High-Bb.png'},
    {name:'Bb', image:'/noteImages/bass-Bbmajor-Low-Bb.png'},
    {name:'A', image:'/noteImages/bass-Cmajor-A.png'},
    {name:'B', image:'/noteImages/bass-Cmajor-B.png'},
    {name:'D', image:'/noteImages/bass-Cmajor-D.png'},
    {name:'E', image:'/noteImages/bass-Cmajor-E.png'},
    {name:'F', image:'/noteImages/bass-Cmajor-F.png'},
    {name:'G', image:'/noteImages/bass-Cmajor-G.png'},
    {name:'C', image:'/noteImages/bass-Cmajor-High-C.png'},
    {name:'C', image:'/noteImages/bass-Cmajor-Low-C.png'},
    {name:'A', image:'/noteImages/bass-Gmajor-A.png'},
    {name:'B', image:'/noteImages/bass-Gmajor-B.png'},
    {name:'C', image:'/noteImages/bass-Gmajor-C.png'},
    {name:'D', image:'/noteImages/bass-Gmajor-D.png'},
    {name:'E', image:'/noteImages/bass-Gmajor-E.png'},
    {name:'F#', image:'/noteImages/bass-Gmajor-F#.png'},
    {name:'G', image:'/noteImages/bass-Gmajor-High-G.png'},
    {name:'G', image:'/noteImages/bass-Gmajor-Low-G.png'},
    {name:'A', image:'/noteImages/treble-Bbmajor-A.png'},
    {name:'C', image:'/noteImages/treble-Bbmajor-C.png'},
    {name:'D', image:'/noteImages/treble-Bbmajor-D.png'},
    {name:'Eb', image:'/noteImages/treble-Bbmajor-Eb.png'},
    {name:'F', image:'/noteImages/treble-Bbmajor-F.png'},
    {name:'G', image:'/noteImages/treble-Bbmajor-G.png'},
    {name:'Bb', image:'/noteImages/treble-Bbmajor-High-Bb.png'},
    {name:'Bb', image:'/noteImages/treble-Bbmajor-Low-Bb.png'},
    {name:'A', image:'/noteImages/treble-Cmajor-A.png'},
    {name:'B', image:'/noteImages/treble-Cmajor-B.png'},
    {name:'D', image:'/noteImages/treble-Cmajor-D.png'},
    {name:'E', image:'/noteImages/treble-Cmajor-E.png'},
    {name:'F', image:'/noteImages/treble-Cmajor-F.png'},
    {name:'G', image:'/noteImages/treble-Cmajor-G.png'},
    {name:'C', image:'/noteImages/treble-Cmajor-High-C.png'},
    {name:'C', image:'/noteImages/treble-Cmajor-Low-C.png'},
    {name:'A', image:'/noteImages/treble-Dmajor-A.png'},
    {name:'B', image:'/noteImages/treble-Dmajor-B.png'},
    {name:'C#', image:'/noteImages/treble-Dmajor-C#.png'},
    {name:'E', image:'/noteImages/treble-Dmajor-E.png'},
    {name:'F#', image:'/noteImages/treble-Dmajor-F#.png'},
    {name:'G', image:'/noteImages/treble-Dmajor-G.png'},
    {name:'D', image:'/noteImages/treble-Dmajor-High-D.png'},
    {name:'D', image:'/noteImages/treble-Dmajor-Low-D.png'},
    {name:'A', image:'/noteImages/treble-Fmajor-A.png'},
    {name:'Bb', image:'/noteImages/treble-Fmajor-Bb.png'},
    {name:'C', image:'/noteImages/treble-Fmajor-C.png'},
    {name:'D', image:'/noteImages/treble-Fmajor-D.png'},
    {name:'E', image:'/noteImages/treble-Fmajor-E.png'},
    {name:'G', image:'/noteImages/treble-Fmajor-G.png'},
    {name:'F', image:'/noteImages/treble-Fmajor-High-F.png'},
    {name:'F', image:'/noteImages/treble-Fmajor-Low-F.png'},
    {name:'A', image:'/noteImages/treble-Gmajor-A.png'},
    {name:'B', image:'/noteImages/treble-Gmajor-B.png'},
    {name:'C', image:'/noteImages/treble-Gmajor-C.png'},
    {name:'D', image:'/noteImages/treble-Gmajor-D.png'},
    {name:'E', image:'/noteImages/treble-Gmajor-E.png'},
    {name:'F#', image:'/noteImages/treble-Gmajor-F#.png'},
    {name:'G', image:'/noteImages/treble-Gmajor-High-G.png'},
    {name:'G', image:'/noteImages/treble-Gmajor-Low-G.png'}
    ];

var roundImage;
var score = 0;
var numRounds = 0;

export function playGame(){
    document.getElementById("playGame").style.display = "none";
    document.getElementById("playAgainButton").style.display = "none";
    var pos = Math.floor(Math.random() * imageList.length);
    roundImage =  imageList[pos];

    document.getElementById("imageBox").src = roundImage.image;
    document.getElementById("answerText").style.display = "block";
    document.getElementById("answerButton").style.display = "block";
    numRounds +=1;
}

export function playAgain() {
    document.getElementById("finalScore").style.display = "none";
    document.getElementById("result").style.display = "none";
    score = 0;
    numRounds = 0;
    playGame();
}
       

export function checkAnswer(){
    var input = document.getElementById("answerText");
    var inputVal = input.value;
    document.getElementById("answerText").style.display = "none";
    document.getElementById("answerText").value = "";
    document.getElementById("answerButton").style.display = "none";

   if(inputVal.toLowerCase() === roundImage.name.toLowerCase()){
    
    var result = document.getElementById("result");
    result.innerHTML = "Correct!";
    result.style.display="block";
    score += 1;

   }else{
    var result = document.getElementById("result");
    result.innerHTML = "Incorrect!";
    result.style.display="block";
   }

   if(numRounds < 6) {
    document.getElementById("playGame").style.display = "block";
   }
   else {
    var result = document.getElementById("finalScore");
    result.innerHTML = "Final Score: " + score +"/6!";
    result.style.display="block";
    document.getElementById("playAgainButton").style.display = "block";
   }

}


