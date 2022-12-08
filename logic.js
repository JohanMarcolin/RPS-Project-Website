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
import {
  showsFinalScoresAndResults,
  showsResultsForAllScreenWidths,
  switchesToNextContainerAfterThisTime,
} from "./utility.js";

export function choicesAreComparedAndWinnerIsDeclared() {
  if (player.choice.type === computer.choice.type) {
    showsResultsForAllScreenWidths("Draw", "Draw", "Draw");
  }

  if (player.choice.type === "rock" && computer.choice.type === "scissors") {
    showsResultsForAllScreenWidths(
      player.name + " wins the round!",
      player.name + " wins the round!",
      " "
    );
    player.score++;
  }

  if (player.choice.type === "paper" && computer.choice.type === "rock") {
    showsResultsForAllScreenWidths(
      player.name + " wins the round!",
      player.name + " wins the round!",
      " "
    );
    player.score++;
  }

  if (player.choice.type === "scissors" && computer.choice.type === "paper") {
    showsResultsForAllScreenWidths(
      player.name + " wins the round!",
      player.name + " wins the round!",
      " "
    );
    player.score++;
  }

  if (player.choice.type === "rock" && computer.choice.type === "paper") {
    showsResultsForAllScreenWidths(
      computer.name + " wins the round!",
      " ",
      computer.name + " wins the round!"
    );
    computer.score++;
  }

  if (player.choice.type === "paper" && computer.choice.type === "scissors") {
    showsResultsForAllScreenWidths(
      computer.name + " wins the round!",
      " ",
      computer.name + " wins the round!"
    );
    computer.score++;
  }

  if (player.choice.type === "scissors" && computer.choice.type === "rock") {
    showsResultsForAllScreenWidths(
      computer.name + " wins the round!",
      " ",
      computer.name + " wins the round!"
    );
    computer.score++;
  }

  if (
    player.score === game.settings.bestOf - 1 &&
    player.score > computer.score
  ) {
    showsFinalScoresAndResults(player.name + " wins the game!");
    switchesToNextContainerAfterThisTime(gameRunning, gameOver, 3500);
    game.stats.player.wins++;
    game.stats.computer.losses++;
  }

  if (
    computer.score === game.settings.bestOf - 1 &&
    computer.score > player.score
  ) {
    showsFinalScoresAndResults(computer.name + " wins the game!");
    switchesToNextContainerAfterThisTime(gameRunning, gameOver, 3500);
    game.stats.computer.wins++;
    game.stats.player.losses++;
  }
}
