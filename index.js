

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2=  Math.floor(Math.random()*6)+1;
var randomDiceImageFor1 = "dice"+ randomNumber1 +".png";
var randomDiceImageFor2 = "dice"+ randomNumber2 +".png";

document.querySelector(".img1").setAttribute("src", randomDiceImageFor1);
document.querySelector(".img2").setAttribute("src", randomDiceImageFor2);



if(randomNumber1 > randomNumber2){
    document.getElementById("heading").innerHTML="Player1 won🎀";
} 
else if(randomNumber1 === randomNumber2){
    document.getElementById("heading").innerHTML="🎃Draw!";
}
else{
    document.getElementById("heading").innerHTML="Player2 won🎀";
}