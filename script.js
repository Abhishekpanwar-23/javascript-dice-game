var randomNumber1= Math.floor(Math.random()*6)+1;


var randomNumberDice="dice"+randomNumber1+".png";

var randomimage="./images/"+randomNumberDice;

var img1=document.querySelector("img");

img1.setAttribute("src",randomimage);

var randomNumber2= Math.floor(Math.random()*6)+1;

var randomNumberDice2="dice"+randomNumber2+".png";

var randomimage2="./images/"+randomNumberDice2;


var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player  1 Wins !"
}else if(randomNumber1< randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins !"
}else{
    document.querySelector("h1").innerHTML="Draw !"

}