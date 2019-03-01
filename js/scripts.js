//business logic
function rollDice(){
  return Math.floor(Math.random()*6)+1
}


function PigDice() {
  this.rollScore = 0;
  this.temporaryScore = 0;
  this.hold;


}

//when the outcome is 1
PigDice.prototype.one = function(){
  if(this.temporaryScore===1){
    alert( "your turn is over. Your total score is 0");
    this.rollScore = 0;

  }
  else{
   this.rollScore += this.temporaryScore;
  }
}











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
});
