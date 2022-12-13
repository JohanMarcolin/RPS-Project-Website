import { game, player, computer } from "./game.js";
import {
  mainMenu,
  check3,
  check5,
  startButton,
  gameRunning,
  roundResult,
  splitRoundResultPlayer,
  splitRoundResultComputer,
  rockElement,
  paperElement,
  scissorsElement,
  gameOver,
} from "./elements.js";
import { animatesPlayerElement } from "./animations.js";

export function handleChange(event) {
  if (event.target.id === "player-name") {
    player.name = event.target.value;
    game.settings.nameWasChosen = true;
    return player.name, game.settings;
  }

  if (event.target.id === "check-3") {
    assignsThisAmountOfRoundsWhenCheckboxIsToggled(check3, 3);
  }

  if (event.target.id === "check-5") {
    assignsThisAmountOfRoundsWhenCheckboxIsToggled(check5, 5);
  }

  function assignsThisAmountOfRoundsWhenCheckboxIsToggled(checkbox, rounds) {
    if (!checkbox.checked) {
      game.settings.bestOf = null;
      return game.settings;
    } else {
      game.settings.bestOf = rounds;
      return game.settings;
    }
  }
}

export function handleClick(event) {
  if (player.choice.animating) {
    return;
  }

  if (event.target.id === "start-button") {
    mainMenu.style.display = "none";
    gameRunning.style.display = "grid";
  }
  if (event.target.id === "player-choice-rock") {
    setsAndRecordsChoice("rock");
    animatesPlayerElement(rockElement, "player-choice-animation");
  }
  if (event.target.id === "player-choice-paper") {
    setsAndRecordsChoice("paper");
    animatesPlayerElement(paperElement, "player-choice-animation");
  }
  if (event.target.id === "player-choice-scissors") {
    setsAndRecordsChoice("scissors");
    animatesPlayerElement(scissorsElement, "player-choice-animation");
  }

  if (event.target.id === "rematch-button") {
    clearsPreviousGameFromScreenAndRestartsFromThisContainer(gameRunning);
  }

  if (event.target.id === "return-to-main-menu-button") {
    clearsPreviousGameFromScreenAndRestartsFromThisContainer(mainMenu);
  }

  function setsAndRecordsChoice(choice) {
    player.choice.made = true;
    player.choice.type = choice;
    if (choice === "rock") {
      game.stats.player.choices.rock++;
    } else if (choice === "paper") {
      game.stats.player.choices.paper++;
    } else if (choice === "scissors") {
      game.stats.player.choices.scissors++;
    }
  }
  function clearsPreviousGameFromScreenAndRestartsFromThisContainer(container) {
    player.score = 0;
    computer.score = 0;
    gameOver.style.display = "none";
    container.style.display = "grid";
    roundResult.innerText = "Result";
    splitRoundResultPlayer.innerText = " ";
    splitRoundResultComputer.innerText = " ";
  }
}

export function handleCheckbox(check3, check5) {
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

export function handleStartButton(startButton) {
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
