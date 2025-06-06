var randomNumber = Math.floor(Math.random() * 6) + 1;  // 1-6
var  randomDiceImage =  "dice" + randomNumber + ".png";
var randomimagesource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);



var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6
var  randomDiceImage =  "dice" + randomNumber1 + ".png";
var randomimagesource = "images/" + randomDiceImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesource);


if (randomNumber > randomNumber1){
    document.querySelector("h1").innerHTML = " 🚩Player 1 wins";
}
else if (randomNumber1 > randomNumber){
    document.querySelector("h1").innerHTML = " 🚩Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}