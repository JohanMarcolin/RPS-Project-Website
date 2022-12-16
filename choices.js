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
    game.stats.player,
    computer,
    game.stats.computer
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
  if (
    (subject.choice.type === "rock" && opponent.choice.type === "scissors") ||
    (subject.choice.type === "paper" && opponent.choice.type === "rock") ||
    (subject.choice.type === "scissors" && opponent.choice.type === "paper")
  ) {
    showsResultsForAllScreenWidths(
      subject.name + " wins the round!",
      subject.name + " wins the round!"
    );
    subject.score++;
  }
}

function determinesTheWinnerOfEachGameAndUpdatesStatsForWinsAndLosses(
  subject,
  subjectStats,
  opponent,
  opponentStats
) {
  determinesIfSubjectWinsTheGame(
    subject,
    subjectStats,
    opponent,
    opponentStats
  );
  determinesIfSubjectWinsTheGame(
    opponent,
    opponentStats,
    subject,
    subjectStats
  );
}

function determinesIfSubjectWinsTheGame(
  subject,
  subjectStats,
  opponent,
  opponentStats
) {
  if (
    subject.score === game.settings.bestOf - 1 &&
    subject.score > opponent.score
  ) {
    showsFinalScoresAndResults(subject.name + "\n wins the game!");
    switchesToNextContainerAfterThisTime(gameRunning, gameOver, 3500);
    subjectStats.wins++;
    opponentStats.losses++;
  }
}
