//business logic
var randomNumber = Math.floor(Math.random() * 6) + 1

function PigDice(addingUp(), randomNumber) {
  this.permanentScore = addingUp();
  this.temporaryScore = randomNumber;
  this.hold;
  this.play;


}



//when the outcome is 1
PigDice.prototype.addingUp = function(num) {
  if (this.temporaryScore === 1) {
    alert("your turn is over. Your total score is 0");
    this.permanentScore = 0;

  } else if(this.temporaryScore === 2) {
    this.permanentscore +=10;

  }
  else if(this.temporaryScore===3){
    this.permanentScore +=15;
  }
  else if(this.temporaryScore===4){
    this.permanentScore +=15;
  }
  else if(this.temporaryScore=== 5){
    this.permanentScore +=20
  }
  else{
    this.permanentScore+=20
  }
}

//objects
var firstGamer = new PigDice();
var secondGamer = new PigDice();












//user logic
$(document).ready(function() {
  var gamerOne = $("input#gamer1").val();
  var gamerTwo = $("input#gamer2").val();
  var gamerThree = $("input#gamer3").val();
  var gamerFour = $("input#gamer4").val();
  $("button#play").click(function() {
    $(".jumbotron").slideUp(800, function() {
      // $("h1.player-one").append(gamerOne);
      // $("h1.player-two").text(gamerThree);

    });

    $("div.header").show();
  });
  $("button#roll").click(function() {
$("#tester").text(firstGamer.addingUp(randomNumber));
  });
});
