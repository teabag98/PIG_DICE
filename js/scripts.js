//business logic
function Players(player1, player2) {
  this.firstPlayer = player1;
  this.secondPlayer = player2;

}








//user logic
$(document).ready(function() {
  var gamerOne = $("input#gamer1").val();
  var gamerTwo = $("input#gamer2").val();

  var playerName = new Players(gamerOne,gamerTwo);



  $("#play").click(function() {
    $(".jumbotron").slideUp(800, )
    // $("#tester").text(gamerOne);
    // $("input#gamer1").val("");
    //  $("input#gamer2").val("");
    $(".playerOneName").text("aawenwewlkjvvgefeBHDJIOWKPAGKPDSHDFK");
    $(".total-score").text("total results");
    $(".current-score").text("current score")

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
