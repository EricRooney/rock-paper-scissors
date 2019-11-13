function play(playerChoice) {
  let player = playerChoice;
  let computer = "paper";
  let outcome = "The outcome is ";
  let result;

  let random =
    Math.floor(Math.random() * (Math.floor(4) - Math.ceil(1))) + Math.ceil(1);

  if (random == 1) {
    computer = "rock";
  } else if (random == 2) {
    computer = "paper";
  } else {
    computer = "scissors";
  }

  if (computer == player) {
    return (document.querySelector("#GameResult").innerHTML =
      outcome + "Stalemate!");
  } else if (computer == "rock" && player == "scissors") {
    return (document.querySelector("#GameResult").innerHTML =
      outcome + "You Lose!");
  } else if (computer == "paper" && player == "rock") {
    return (document.querySelector("#GameResult").innerHTML =
      outcome + "You Lose!");
  } else if (computer == "scissors" && player == "paper") {
    return (document.querySelector("#GameResult").innerHTML =
      outcome + "You Lose!");
  } else if (computer == "rock" && player == "paper") {
    return (document.querySelector("#GameResult").innerHTML =
      outcome + "You Win!");
  } else if (computer == "paper" && player == "scissors") {
    return (document.querySelector("#GameResult").innerHTML =
      outcome + "You Win!");
  } else if (computer == "scissors" && player == "rock") {
    return (document.querySelector("#GameResult").innerHTML =
      outcome + "You Win!");
  }
}
