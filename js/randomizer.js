function pickRandomDicee(){
  return Math.floor(Math.random()*6);
}

function replaceImage(){
  var diceeImages = ["images/dice1.png","images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
  var firstNumber = pickRandomDicee();
  var secondNumber = pickRandomDicee();

  document.getElementById("dice1").setAttribute("src", diceeImages[firstNumber]);
  document.getElementById("dice2").setAttribute("src", diceeImages[secondNumber]);

  chooseWhoWins(firstNumber, secondNumber);

}

function chooseWhoWins(firstNumber, secondNumber){
  if(firstNumber>secondNumber){
    document.querySelector("h1").innerHTML = "<i class=\"fas fa-trophy\"></i> Player 1 Wins";
  }else if (firstNumber<secondNumber){
    document.querySelector("h1").innerHTML = "Player 2 Wins <i class=\"fas fa-trophy\"></i>";
  }else{
    document.querySelector("h1").innerHTML = "<i class=\"fas fa-balance-scale\"></i> Draw! <i class=\"fas fa-balance-scale\"></i>";
  }

}
