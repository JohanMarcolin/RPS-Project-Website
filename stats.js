import {
  playerStatsWins,
  playerStatsLosses,
  playerStatsRock,
  playerStatsPaper,
  playerStatsScissors,
  playerPieChartData1,
  playerPieChartData2,
} from "./elements.js";
import { game } from "./game.js";

export function statsPrototype() {
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

  console.log(playerPaperRatio);
  console.log(playerScissorsRatio);

  playerStatsWins.innerText = "wins: " + game.stats.player.wins + " (" + playerPercentageOfWins.toFixed(1) + "%)";
  playerStatsLosses.innerText = "losses: " + game.stats.player.losses + " (" + playerPercentageOfLosses.toFixed(1) + "%)";
  playerStatsRock.innerText = "rock: " + game.stats.player.choices.rock + " (" + playerChoicePercentageOfRock.toFixed(1) + "%)";
  playerStatsPaper.innerText = "paper: " + game.stats.player.choices.paper + " (" + playerChoicePercentageOfPaper.toFixed(1) + "%)";;
  playerStatsScissors.innerText =
    "scissors: " + game.stats.player.choices.scissors + " (" + playerChoicePercentageOfScissors.toFixed(1) + "%)";;
}
