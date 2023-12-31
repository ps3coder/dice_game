// function randomNumber1(min, max) { // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// const rndInt = randomNumber1(1, 6)
// console.log(rndInt)

var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6


var randomDiceImage = "Dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "Images/" + randomDiceImage; //images/dice1.png - image/dice6.png


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // dice2.png - image/dice



document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 win";

}
else {
    document.querySelector("h1").innerHTML = "DRAW";
}