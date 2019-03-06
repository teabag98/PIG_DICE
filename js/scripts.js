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


//display player names
function names() {
  var firstGamer = document.getElementById("gamer1").value;
  var secondGamer = document.getElementById("gamer2").value;
  document.getElementById("playerOneName").innerHTML = firstGamer;
  document.getElementById("playerTwoName").innerHTML = secondGamer;
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
    // playerOne.total = 0;
    document.getElementById("current-score").innerHTML = playerOne.rollScore;
    document.getElementById("total-score").innerHTML = playerOne.total;
    playerOneSwitch();

  }

}

function winner() {
  if (playerOne.total >= 100) {
    alert("player one wins")
  } else if (playerTwo.total >= 100) {
    alert("player two wins")
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
    // playerTwo.total = 0;
    document.getElementById("current-score2").innerHTML = playerTwo.rollScore;
    document.getElementById("total-score2").innerHTML = playerTwo.total;
    playerTwoSwitch();

  }
}

//adds current score to total score
Dice.prototype.hold = function() {
  this.total += this.rollscore;
}

//update total score when player roll
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


//user logic
$(document).ready(function() {
      $("button#play").click(function() {
        $(".jumbotron").slideUp(800, );
        $(".header").show();
        names();

      });
      $("button#player1-roll").click(function() {
        diceRollOne();
        winner();
      });
      $("button#player2-roll").click(function() {
        diceRollTwo();
        winner();
      });
      $("button#player1-hold").click(function() {
        updateFirstScore();
        playerOneSwitch();
        winner();

        $("button#player2-hold").click(function() {
          updateSecondScore();
          playerTwoSwitch();
          winner();
        });
      });
