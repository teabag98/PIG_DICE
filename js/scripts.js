//user logic
$(document).ready(function() {
  var gamerOne = $("input#gamer1").val();
  var gamerTwo = $("input#gamer2").val();
  var gamerThree = $("input#gamer3").val();
  var gamerFour = $("input#gamer4").val();
  $("button#play").click(function() {
   $(".jumbotron").slideUp(800,function(){
     // $("h1.player-one").append(gamerOne);
     // $("h1.player-two").text(gamerThree);
     alert(gamerOne);
   });


  });
});
