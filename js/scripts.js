//business logic
//defining the constructor function for the two player objects
function Dice(name) {
  this.total = 0;
  this.rollScore = 0;
  this.name = name;
}

var randomNumber;
var playerOne = new Dice();
var playerTwo = new Dice();

function names(){
  var firstGamer = document.gamer1.value();
  var secondGamer =document.gamer2.value();
}

//change the dice patterns and show results
function diceRollOne() {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  var images = document.getElementById("diceroll1");
  images.src = "images/" + randomNumber + ".png";

  if (randomNumber !== 1) {
    var tempScore = playerOne.rollScore += randomNumber;
    document.getElementById("current-score").innerHTML = playerOne.rollScore;
  } else {
    playerOne.rollScore = 0;
    playerOne.total = 0;
    document.getElementById("current-score").innerHTML = playerOne.rollScore;
    document.getElementById("total-score").innerHTML = playerOne.total;
    playerOneSwitch();

  }
}


//guesses number
var secondRandomNumber;

function diceRollTwo() {
  secondRandomNumber = Math.floor(Math.random() * 6) + 1;
  var images = document.getElementById("diceroll2");
  images.src = "images/" + secondRandomNumber + ".png";

  if (secondRandomNumber !== 1) {
    playerTwo.rollScore += secondRandomNumber;
    document.getElementById("current-score2").innerHTML = playerTwo.rollScore;
  } else {
    playerTwo.rollScore = 0;
    playerTwo.total = 0;
    document.getElementById("current-score2").innerHTML = playerTwo.rollScore;
    document.getElementById("total-score2").innerHTML = playerTwo.total;
    playerTwoSwitch();

  }
}

//adds current score to total score
Dice.prototype.hold = function() {
  this.total += this.rollscore;
}

function updateFirstScore() {
  var total = playerOne.total += playerOne.rollScore;
  document.getElementById("total-score").innerHTML = total;
  playerOne.rollScore = 0;
  document.getElementById("current-score").innerHTML = playerOne.rollScore;
}

function updateSecondScore() {
  var total = playerTwo.total += playerTwo.rollScore;
  document.getElementById("total-score2").innerHTML = total;
  playerTwo.rollScore = 0;
  document.getElementById("current-score2").innerHTML = playerOne.rollScore;
}


function playerOneSwitch() {
  document.getElementById("player1-roll").disabled = true;
  document.getElementById("player1-hold").disabled = true;
  document.getElementById("player2-roll").disabled = false;
  document.getElementById("player2-hold").disabled = false;

}

function playerTwoSwitch() {
  document.getElementById("player2-roll").disabled = true;
  document.getElementById("player2-hold").disabled = true;
  document.getElementById("player1-roll").disabled = false;
  document.getElementById("player1-hold").disabled = false;
}

// Dice.prototype.winner = function() {
//   if (this.total >= 10) {
//     alert("congratulations");
//   }
//   else{
//
//   }

 //checks winner
function winner(){
  if(playerOne.total >=100){
    alert(gamerOne +" you are winner")
  }
  else if(playerTwo.total>=100){
    alert(gamerTwo +" you are a winner")
  }
}










//user logic
$(document).ready(function() {
  // var gamerOne = $("input#gamer1").val();
  // var gamerTwo = $("input#gamer2").val();



  $("button#play").click(function() {
    $(".jumbotron").slideUp(800, );
  });
  $("button#player1-roll").click(function() {
    diceRollOne();
  });
  $("button#player2-roll").click(function() {
    diceRollTwo();
  });
  $("button#player1-hold").click(function() {
    updateFirstScore();
    playerOneSwitch();
    winner();
  });
  $("button#player2-hold").click(function() {
    updateSecondScore();
    playerTwoSwitch();
    winner();
  });
});





//
//
//
//
//
//
//
//
// //user logic
// $(document).ready(function() {
//   var gamerOne = $("input#gamer1").val();
//   var gamerTwo = $("input#gamer2").val();
//   var gamerThree = $("input#gamer3").val();
//   var gamerFour = $("input#gamer4").val();
//   $("button#play").click(function() {
//     $(".jumbotron").slideUp(800, function() {
//       // $("h1.player-one").append(gamerOne);
//       // $("h1.player-two").text(gamerThree);
//
//     });
//
//     $("div.header").show();
//   });
//
// });
// // });









//business logic

//
// function PigDice() {
//   this.permanentScore = 0;
//   this.temporaryScore = 0;
//   this.hold;
//   this.roll;
//
//
// }
//
// var arrayNumbers = [];
//
// var randomNumber;
//
// PigDice.prototype.generateNumber = function() {
//   randomNumber = Math.floor(Math.random() * 6) + 1
//   arrayNumbers.push(randomNumber);
//   for (i = 1; i <= randomNumber.length; i++) {
//     return this += [i];
//   }
// }




//when the outcome is 1
// PigDice.prototype.addingUp = function(i) {
//   if (arrayNumbers[i] === 1) {
//     alert("your turn is over. Your total score is 0");
//     this.permanentScore = 0;
//
//   } else if (arrayNumbers[i] === 2) {
//     return this.permanentscore += 10;
//
//
//   } else if (arrayNumbers[i]=== 3) {
//     return this.permanentScore += 15;
//   } else if (arrayNumbers[i] === 4) {
//     return this.permanentScore += 15;
//   } else if (arrayNumbers[i] === 5) {
//     return this.permanentScore += 20
//   } else {
//     return this.permanentScore += 20
//   }
//
// }
//

// //objects
// var firstGamer = new PigDice();
// var secondGamer = new PigDice();
//
//
// var accumulativeScore = firstGamer.permanentScore.generateNumber();
//
