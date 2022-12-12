import { animatesComputerElement } from "./animations.js";
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

} from "./elements.js";

import {
  handleChange,
  handleCheckbox,
  handleClick,
  handleStartButton,
} from "./events.js";
import { choicesAreComparedAndWinnerIsDeclared } from "./logic.js";
import { statsPrototypeForPlayer, statsPrototypeForComputer } from "./stats.js";
export let game = {
  settings: { nameWasChosen: false, bestOf: null },
  stats: {
    player: { choices: { rock: 0, paper: 0, scissors: 0 }, 
    wins: 0, losses: 0 },
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
  console.log(game.stats.player.choices.rock)

  //computer chooses R, P or S
  computer.choice.type = choices[Math.floor(Math.random() * (3 - 0) + 0)];
  console.log("Computer: " + computer.choice.type);
  animatesComputerElement(computer, "computer-choice-animation");
  //collecting computer stats
  if (computer.choice.type === "rock") {
    game.stats.computer.choices.rock++;
  }
  if (computer.choice.type === "paper") {
    game.stats.computer.choices.paper++;
  }
  if (computer.choice.type === "scissors") {
    game.stats.computer.choices.scissors++;
  }


  //game logic
  choicesAreComparedAndWinnerIsDeclared();

      //stats prototype
statsPrototypeForPlayer();
statsPrototypeForComputer();

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
