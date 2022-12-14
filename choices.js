import { game, player, computer } from "./game.js";
import { gameRunning, gameOver } from "./elements.js";
import {
  showsFinalScoresAndResults,
  showsResultsForAllScreenWidths,
  switchesToNextContainerAfterThisTime,
} from "./utility.js";

export function choicesAreComparedAndWinnerIsDeclared() {
  checksIfChoicesEqualADraw();

  determinesTheWinnerOfEachRound(player, computer);

  determinesTheWinnerOfEachGameAndUpdatesStatsForWinsAndLosses(
    player,
    computer
  );
}

function checksIfChoicesEqualADraw() {
  if (player.choice.type === computer.choice.type) {
    showsResultsForAllScreenWidths("Draw", "Draw", "Draw");
  }
}

function determinesTheWinnerOfEachRound(subject, opponent) {
  determinesIfSubjectWinsTheRound(subject, opponent);
  determinesIfSubjectWinsTheRound(opponent, subject);
}

function determinesIfSubjectWinsTheRound(subject, opponent) {
  if (subject.choice.type === "rock" && opponent.choice.type === "scissors") {
    showsResultsForAllScreenWidths(
      subject.name + " wins the round!",
      subject.name + " wins the round!"
    );
    subject.score++;
  }

  if (subject.choice.type === "paper" && opponent.choice.type === "rock") {
    showsResultsForAllScreenWidths(
      subject.name + " wins the round!",
      subject.name + " wins the round!"
    );
    subject.score++;
  }

  if (subject.choice.type === "scissors" && opponent.choice.type === "paper") {
    showsResultsForAllScreenWidths(
      subject.name + " wins the round!",
      subject.name + " wins the round!"
    );
    subject.score++;
  }
}

function determinesTheWinnerOfEachGameAndUpdatesStatsForWinsAndLosses(
  subject,
  opponent
) {
  determinesIfSubjectWinsTheGame(subject, opponent);
  determinesIfSubjectWinsTheGame(opponent, subject);
}

function determinesIfSubjectWinsTheGame(subject, opponent) {
  if (
    subject.score === game.settings.bestOf - 1 &&
    subject.score > opponent.score
  ) {
    showsFinalScoresAndResults(subject.name + " wins the game!");
    switchesToNextContainerAfterThisTime(gameRunning, gameOver, 3500);
    //known bug, attribute points correctly!
    game.stats.player.wins++;
    game.stats.computer.losses++;
  }
}
