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
  adjustsTheSizeOfBodyToTheSizeOfViewport,
} from "./elements.js";

import {
  handlesChange,
  handlesClick,
  handlesCheckbox,
  handlesStartButton,
} from "./events.js";

import { choicesAreComparedAndWinnerIsDeclared } from "./choices.js";
import { collectsComputerStats, updatesGameStats } from "./stats.js";

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

//NOT part of hand-in version
/* addEventListener('resize', adjustsTheSizeOfBodyToTheSizeOfViewport); */
nameInput.addEventListener("change", handlesChange);
check3.addEventListener("change", handlesChange);
check5.addEventListener("change", handlesChange);
startButton.addEventListener("click", handlesClick);
rockElement.addEventListener("click", handlesClick);
paperElement.addEventListener("click", handlesClick);
scissorsElement.addEventListener("click", handlesClick);
rematchButton.addEventListener("click", handlesClick);
returnToMainMenuButton.addEventListener("click", handlesClick);

export function runGame() {
  requestAnimationFrame(runGame);

  handlesCheckbox(check3, check5);
  handlesStartButton(startButton);

  showScore();
  showNames();

  if (player.choice.made) {
    //animations and stats collection are triggered on click (see events.js)
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
}
