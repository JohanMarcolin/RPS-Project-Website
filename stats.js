import {
  playerStatsWins,
  playerStatsLosses,
  playerStatsRock,
  playerStatsPaper,
  playerStatsScissors,
  playerPieChartData1,
  playerPieChartData2,
  computerStatsWins,
  computerStatsLosses,
  computerStatsRock,
  computerStatsPaper,
  computerStatsScissors,
  computerPieChartData1,
  computerPieChartData2,
} from "./elements.js";

import { game } from "./game.js";

export function statsPrototypeForPlayer() {
  let playerTotalGames = game.stats.player.wins + game.stats.player.losses;

  let playerPercentageOfWins =
    (game.stats.player.wins / playerTotalGames) * 100;
  let playerPercentageOfLosses =
    (game.stats.player.losses / playerTotalGames) * 100;

  //3.6 degrees per 1 %

  let playerWinRatio = playerPercentageOfWins;

  playerPieChartData1.style.backgroundImage =
    "conic-gradient(" +
    "rgb(31, 125, 233) 0" +
    playerWinRatio.toString() +
    "%," +
    "rgb(235, 59, 50) 0 100%)";

  let playerTotalChoices =
    game.stats.player.choices.rock +
    game.stats.player.choices.paper +
    game.stats.player.choices.scissors;

let playerChoicePercentageOfRock =
    (game.stats.player.choices.rock / playerTotalChoices) * 100;
  let playerChoicePercentageOfPaper =
    (game.stats.player.choices.paper / playerTotalChoices) * 100;
  let playerChoicePercentageOfScissors =
    (game.stats.player.choices.scissors / playerTotalChoices) * 100;

  let playerPaperRatio = playerChoicePercentageOfPaper;
  let playerScissorsRatio = playerChoicePercentageOfScissors + playerPaperRatio;
  playerPieChartData2.style.backgroundImage =
    "conic-gradient(" +
    "pink 0 " +
    playerPaperRatio.toString() +
    "%," +
    "lightblue 0 " +
    playerScissorsRatio.toString() +
    "%," +
    "orange 0";

  playerStatsWins.innerText = "wins: " + game.stats.player.wins + " (" + playerPercentageOfWins.toFixed(1) + "%)";
  playerStatsLosses.innerText = "losses: " + game.stats.player.losses + " (" + playerPercentageOfLosses.toFixed(1) + "%)";
  playerStatsRock.innerText = "rock: " + game.stats.player.choices.rock + " (" + playerChoicePercentageOfRock.toFixed(1) + "%)";
  playerStatsPaper.innerText = "paper: " + game.stats.player.choices.paper + " (" + playerChoicePercentageOfPaper.toFixed(1) + "%)";;
  playerStatsScissors.innerText =
    "scissors: " + game.stats.player.choices.scissors + " (" + playerChoicePercentageOfScissors.toFixed(1) + "%)";;
}

export function statsPrototypeForComputer() {
  let computerTotalGames = game.stats.computer.wins + game.stats.computer.losses;

  let computerPercentageOfWins =
    (game.stats.computer.wins / computerTotalGames) * 100;
  let computerPercentageOfLosses =
    (game.stats.computer.losses / computerTotalGames) * 100;

  //3.6 degrees per 1 %

  let computerWinRatio = computerPercentageOfWins;

  computerPieChartData1.style.backgroundImage =
    "conic-gradient(" +
    "rgb(31, 125, 233) 0" +
    computerWinRatio.toString() +
    "%," +
    "rgb(235, 59, 50) 0 100%)";

  let computerTotalChoices =
    game.stats.computer.choices.rock +
    game.stats.computer.choices.paper +
    game.stats.computer.choices.scissors;

let computerChoicePercentageOfRock =
    (game.stats.computer.choices.rock / computerTotalChoices) * 100;
  let computerChoicePercentageOfPaper =
    (game.stats.computer.choices.paper / computerTotalChoices) * 100;
  let computerChoicePercentageOfScissors =
    (game.stats.computer.choices.scissors / computerTotalChoices) * 100;

  let computerPaperRatio = computerChoicePercentageOfPaper;
  let computerScissorsRatio = computerChoicePercentageOfScissors + computerPaperRatio;
  computerPieChartData2.style.backgroundImage =
    "conic-gradient(" +
    "pink 0 " +
    computerPaperRatio.toString() +
    "%," +
    "lightblue 0 " +
    computerScissorsRatio.toString() +
    "%," +
    "orange 0";


  computerStatsWins.innerText = "wins: " + game.stats.computer.wins + " (" + computerPercentageOfWins.toFixed(1) + "%)";
  computerStatsLosses.innerText = "losses: " + game.stats.computer.losses + " (" + computerPercentageOfLosses.toFixed(1) + "%)";
  computerStatsRock.innerText = "rock: " + game.stats.computer.choices.rock + " (" + computerChoicePercentageOfRock.toFixed(1) + "%)";
  computerStatsPaper.innerText = "paper: " + game.stats.computer.choices.paper + " (" + computerChoicePercentageOfPaper.toFixed(1) + "%)";;
  computerStatsScissors.innerText =
    "scissors: " + game.stats.computer.choices.scissors + " (" + computerChoicePercentageOfScissors.toFixed(1) + "%)";;
}