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

function end(count, max, user, bot) {
  if (count === max) {
    const result = document.getElementById("result")
    if (user > bot) {
      result.textContent = "User win!"
    } else if (user < bot) {
      result.textContent = "Bot win!"
    } else {
      if (count !== 1)
        result.textContent = "Draw!"
    }
  }
}

function game() {
  let userScore = 0;
  let botScore = 0;
  let userInput = null;
  let scoreArr = [];

  let roundCount = 1;
  const roundMax = 5;

  const scoreboard_user = document.getElementById("user")
  const scoreboard_bot = document.getElementById("bot")
  const scoreboard_round = document.getElementById("round")

  const btns = document.querySelectorAll("button")
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {

      userInput = btn.getAttribute("id")
      computerInput = getComputerChoice()

      if (roundCount !== roundMax + 1) {

        result = play(userInput, computerInput);
        switch (result) {
          case "Lose":
            botScore++;
            scoreboard_round.textContent = roundCount;
            scoreboard_bot.textContent = botScore;
            scoreArr.push(`User: ${userInput}\nComputer: ${computerInput}`)
            break;

          case "Win":
            userScore++;
            scoreboard_round.textContent = roundCount;
            scoreboard_user.textContent = userScore;
            scoreArr.push(`User: ${userInput}\nComputer: ${computerInput}`)
            break;

          default:
            scoreboard_round.textContent = roundCount;
            scoreArr.push(`User: ${userInput}\nComputer: ${computerInput}`)
            scoreboard_user.textContent = userScore;
            scoreboard_bot.textContent = botScore;
        }
        roundCount++;
      } else {
        btn.setAttribute("disabled", "");
        end(roundCount - 1, roundMax, userScore, botScore);
      }
    })
  })
}

game()