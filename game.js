// return rock or paper or scissors randomly
function getComputerChoice() {
  const weapon = [
    "paper",
    "rock",
    "scissors"
  ];
  return weapon[Math.floor(Math.random() * 10) % weapon.length];
}

function play(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase()

  // Draw
  if (playerSelection === computerSelection) {
    return "Draw"

    // Paper
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Win"
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Lose"

    // Rock
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Win"
  }
  else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Lose"
  }

  // Scissors
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Win"
  } else {
    return "Lose"
  }

}

function game() {
  let userScore = 0;
  let botScore = 0;
  let result;
  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Enter you weapon");
    result = play(userInput, getComputerChoice());
    switch (result) {
      case "Lose":
        botScore++;
        console.log(`Score: ${userScore}`)
        break;
      case "Win":
        userScore++;
        console.log(`Score: ${userScore}`)
        break;
      default:
        console.log(`Score: ${userScore}`)
    }
  }
  if (userScore > botScore) {
    console.log("User win!: " + userScore)
  } else if (userScore < botScore) {
    console.log("User lose!: " + userScore)
  } else {
    console.log("Draw: " + userScore)
  }
}