// return rock or paper or scissors randomly
function getComputerChoice() {
  const weapon = [
    "paper",
    "rock",
    "scissors"
  ];
  return weapon[Math.floor(Math.random() * 10) % weapon.length];
}