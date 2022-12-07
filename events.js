import { game, player, computer } from "./game.js";
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
} from "./elements.js";

export function handleChange(event) {
  if (event.target.id === "player-name") {
    player.name = event.target.value;
    game.settings.nameWasChosen = true;
    return player.name, game.settings;
  }

  if (event.target.id === "check-3") {
    if (!check3.checked) {
      game.settings.bestOf = null;
      return game.settings;
    } else {
      game.settings.bestOf = 3;
      return game.settings;
    }
  }

  if (event.target.id === "check-5") {
    if (!check5.checked) {
      game.settings.bestOf = null;
      return game.settings;
    } else {
      game.settings.bestOf = 5;
      return game.settings;
    }
  }
}

export function handleClick(event) {
  if (event.target.id === "start-button") {
    mainMenu.style.display = "none";
    gameRunning.style.display = "grid";
  }
  if (event.target.id === "player-choice-rock") {
    player.choice.made = true;
    player.choice.type = "rock";
    return player.choice;
  }
  if (event.target.id === "player-choice-paper") {
    player.choice.made = true;
    player.choice.type = "paper";
    return player.choice;
  }
  if (event.target.id === "player-choice-scissors") {
    player.choice.made = true;
    player.choice.type = "scissors";
    return player.choice;
  }
  if (event.target.id === "rematch-button") {
    player.score = 0;
    computer.score = 0;
    gameOver.style.display = "none";
    gameRunning.style.display = "grid";
    roundResult.innerText = "Result";
    splitRoundResultPlayer.innerText = " ";
    splitRoundResultComputer.innerText = " ";
    return player.score, computer.score;
  }

  if (event.target.id === "return-to-main-menu-button") {
    player.score = 0;
    computer.score = 0;
    gameOver.style.display = "none";
    mainMenu.style.display = "grid";
    roundResult.innerText = "Result";
    splitRoundResultPlayer.innerText = " ";
    splitRoundResultComputer.innerText = " ";
    return player.score, computer.score;
  }
}

export function handleCheckbox() {
  if (check3.checked) {
    check5.setAttribute("disabled", "");
  } else if (!check3.checked) {
    check5.removeAttribute("disabled");
  }
  if (check5.checked) {
    check3.setAttribute("disabled", "");
  } else if (!check5.checked) {
    check3.removeAttribute("disabled");
  }
}

export function handleStartButton() {
  if (
    player.name === null ||
    player.name === "" ||
    !game.settings.nameWasChosen ||
    game.settings.bestOf === null
  ) {
    startButton.setAttribute("disabled", "");
  } else {
    startButton.removeAttribute("disabled");
  }
}
