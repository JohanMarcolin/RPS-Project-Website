let rockElement = document.querySelector("#player-choice-rock");
let paperElement = document.querySelector("#player-choice-paper");
let scissorsElement = document.querySelector("#player-choice-scissors");

const choices = ["rock", "paper", "scissors"];

let game = {settings: {bestOf: 3}};

let player = {
  name: "PC",
  choice: { made: false, type: "" },
  score: 0,
  stats: { choices: [], wins: [], losses: [] },
};
let computer = {
  name: "NPC",
  choice: { made: false, type: "" },
  score: 0,
  stats: { choices: [], wins: [], losses: [] },
};

rockElement.addEventListener("click", () => {
  player.choice.made = true;
  player.choice.type = "rock";
  return player.choice;
});
paperElement.addEventListener("click", () => {
  player.choice.made = true;
  player.choice.type = "paper";
  return player.choice;
});
scissorsElement.addEventListener("click", () => {
  player.choice.made = true;
  player.choice.type = "scissors";
  return player.choice;
});

export function runGame() {
  requestAnimationFrame(runGame);

  if (player.choice.made === false) {
    return;
  }
  player.choice.made = false;

  console.log("Player: " + player.choice.type);
  computer.choice.type = choices[Math.floor(Math.random() * (3 - 0) + 0)];
  console.log("Computer: " + computer.choice.type);

  if (player.choice.type === computer.choice.type) {
    console.log("Draw");
  } else if (
    player.choice.type === "rock" &&
    computer.choice.type === "scissors"
  ) {
    player.score++;
  } else if (
    player.choice.type === "paper" &&
    computer.choice.type === "rock"
  ) {
    player.score++;
  } else if (
    player.choice.type === "scissors" &&
    computer.choice.type === "paper"
  ) {
    player.score++;
  } else if (
    player.choice.type === "rock" &&
    computer.choice.type === "paper"
  ) {
    computer.score++;
  } else if (
    player.choice.type === "paper" &&
    computer.choice.type === "scissors"
  ) {
    computer.score++;
  } else if (
    player.choice.type === "scissors" &&
    computer.choice.type === "rock"
  ) {
    computer.score++;
  }

  console.log("Player: " + player.score + " Computer: " + computer.score);

  /* if (player.score > computer.score) {
    console.log(
      "Player wins - " +
        "Player: " +
        player.score +
        " Computer: " +
        computer.score
    );
  } else if (computer.score > player.score) {
    console.log(
      "Computer wins - " +
        "Player: " +
        player.score +
        " Computer: " +
        computer.score
    );
  } else {
    console.log(
      "It's a draw - " +
        "Player: " +
        player.score +
        " Computer: " +
        computer.score
    );
  } */
}
