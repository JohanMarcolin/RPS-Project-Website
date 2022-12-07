import {
  /* main menu elements */
  mainMenu,
  nameInput,
  check3,
  check5,
  startButton,
  /* game running elements */
  gameRunning,
  comparedScore,
  playerScore,
  computerScore,
  playerName,
  roundResult,
  splitRoundResultPlayer,
  splitRoundResultComputer,
  rockElement,
  paperElement,
  scissorsElement,
  /*  game over elements */
  gameOver,
  finalComparedScore,
  finalResult,
  rematchButton,
  returnToMainMenuButton,
  /* stats elements */
  playerStats,
  computerStats,
} from "./elements.js";

import {
  handleChange,
  handleCheckbox,
  handleClick,
  handleStartButton,
} from "./events.js";
import { choicesAreComparedAndWinnerIsDeclared } from "./logic.js";

export let game = {
  settings: { nameWasChosen: false, bestOf: null },
  stats: {
    player: { choices: [], wins: 0, losses: 0 },
    computer: { choices: [], wins: 0, losses: 0 },
  },
};

export let player = {
  name: null,
  choice: { made: false, type: "" },
  score: 0,
};
export let computer = {
  name: "Computer",
  choice: { made: false, type: "" },
  score: 0,
};

const choices = ["rock", "paper", "scissors"];

nameInput.addEventListener("change", handleChange);
check3.addEventListener("change", handleChange);
check5.addEventListener("change", handleChange);

startButton.addEventListener("click", handleClick);
rockElement.addEventListener("click", handleClick);
paperElement.addEventListener("click", handleClick);
scissorsElement.addEventListener("click", handleClick);
rematchButton.addEventListener("click", handleClick);
returnToMainMenuButton.addEventListener("click", handleClick);

export function runGame() {
  requestAnimationFrame(runGame);

  //menu events
  handleCheckbox();
  handleStartButton();

  //dynamic content for game interface
  showScore();
  showNames();

  //player chooses R, P or S
  if (!player.choice.made) {
    return;
  } else {
    player.choice.made = false;
  }
  console.log("Player: " + player.choice.type);

  //computer chooses R, P or S
  computer.choice.type = choices[Math.floor(Math.random() * (3 - 0) + 0)];
  console.log("Computer: " + computer.choice.type);

  //stats recording - choices
  game.stats.player.choices.push(player.choice);
  game.stats.computer.choices.push(computer.choice);
  //game logic
  choicesAreComparedAndWinnerIsDeclared();

  //stats prototype
  playerStats.innerText =
    "Player wins: " + game.stats.player.wins + 
    " Losses: " + game.stats.player.losses;
  computerStats.innerText =
    "Computer wins: " + game.stats.computer.wins + 
    " Losses: " + game.stats.computer.losses;

}

function showScore() {
  //for laptops and desktops
  comparedScore.innerText = player.score + " : " + computer.score;
  //for phones and tablets
  playerScore.innerText = player.score;
  computerScore.innerText = computer.score;
}

function showNames() {
  if (game.settings.nameWasChosen) {
    playerName.innerText = player.name;
  }
}
