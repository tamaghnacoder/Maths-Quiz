var player1=localStorage.getItem("player1");
var player2=localStorage.getItem("player2");

player1_score=0;
player2_score=0;
document.getElementById("player1").innerHTML=player1+" : ";
document.getElementById("player2").innerHTML=player2+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn-"+player1;
document.getElementById("player_answer").innerHTML="Answer Turn-"+player2;
