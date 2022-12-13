import { animatesComputerElement } from "./animations.js";

import {
  nameInput,
  check3,
  check5,
  startButton,
  comparedScore,
  playerScore,
  computerScore,
  playerName,
  rockElement,
  paperElement,
  scissorsElement,
  rematchButton,
  returnToMainMenuButton,
} from "./elements.js";

import {
  handleChange,
  handleClick,
  handleCheckbox,
  handleStartButton,
} from "./events.js";

import { choicesAreComparedAndWinnerIsDeclared } from "./choices.js";
import {
  collectsComputerStats,
  updatesGameStats,
} from "./stats.js";

export let game = {
  settings: { nameWasChosen: false, bestOf: null },
  stats: {
    player: { choices: { rock: 0, paper: 0, scissors: 0 }, wins: 0, losses: 0 },
    computer: {
      choices: { rock: 0, paper: 0, scissors: 0 },
      wins: 0,
      losses: 0,
    },
  },
};

export let player = {
  name: null,
  choice: { made: false, type: "", animating: false },
  score: 0,
};
export let computer = {
  name: "Computer",
  choice: { made: false, type: "", animating: false },
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

  handleCheckbox(check3, check5);
  handleStartButton(startButton);

  showScore();
  showNames();

  if (player.choice.made) {
    //animations and stats collection are triggered on click (see events.js)
    console.log("Player: " + player.choice.type);
    computerIsAllowedToMakeAChoice();
  } else {
    return;
  }

  computerMakesAChoice();
  animatesComputerElement("computer-choice-animation");
  collectsComputerStats();

  choicesAreComparedAndWinnerIsDeclared();

 updatesGameStats();
}

function showScore() {
  //for laptops and desktops
  comparedScore.innerText = player.score + " : " + computer.score;
  //for phones
  playerScore.innerText = player.score;
  computerScore.innerText = computer.score;
}

function showNames() {
  if (game.settings.nameWasChosen) {
    playerName.innerText = player.name;
  }
}

function computerIsAllowedToMakeAChoice() {
  player.choice.made = false;
}
function computerMakesAChoice() {
  computer.choice.type = choices[Math.floor(Math.random() * (3 - 0) + 0)];
  console.log("Computer: " + computer.choice.type);
}
