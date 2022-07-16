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