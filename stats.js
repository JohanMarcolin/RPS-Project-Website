import { game, computer } from "./game.js";

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

export function collectsComputerStats() {
  let type = computer.choice.type;
  let choice = game.stats.computer.choices;

  if (type === "rock") {
    choice.rock++;
  } else if (type === "paper") {
    choice.paper++;
  } else if (type === "scissors") {
    choice.scissors++;
  }
}

export function updatesGameStats() {
  handlesPieChart(
    game.stats.player,
    playerPieChartData1,
    "#FF6361", //for wins
    "#FFA600", //for losses
    playerPieChartData2,
    "#003F5C", //for rock
    "#BC5090", //for paper
    "#58508D", //for scissors
    playerStatsWins,
    playerStatsLosses,
    playerStatsRock,
    playerStatsPaper,
    playerStatsScissors
  );
  handlesPieChart(
    game.stats.computer,
    computerPieChartData1,
    "#FF6361", //for wins
    "#FFA600", //for losses
    computerPieChartData2,
    "#003F5C", //for rock
    "#BC5090", //for paper
    "#58508D", //for scissors
    computerStatsWins,
    computerStatsLosses,
    computerStatsRock,
    computerStatsPaper,
    computerStatsScissors
  );
}

export function handlesPieChart(
  these,
  chart1,
  winsColor,
  lossesColor,
  chart2,
  rockColor,
  paperColor,
  scissorsColor,
  data1,
  data2,
  data3,
  data4,
  data5
) {
  let totalGames;
  let winRatio;
  let lossRatio;
  let totalChoices;
  let rockRatio;
  let paperRatio;
  let scissorsRatio;
  let scissorsRatioForPiechart;

  totalGames = these.wins + these.losses;
  winRatio = (these.wins / totalGames) * 100;
  lossRatio = (these.losses / totalGames) * 100;

  chart1.style.backgroundImage = //only winRatio is needed for the chart
    "conic-gradient(" +
    winsColor +
    " 0 " +
    winRatio.toString() + //the % of winning
    "%," +
    lossesColor +
    " 0 100%)"; //the remaining % amount illustrates the % of losing

  totalChoices =
    these.choices.rock + these.choices.paper + these.choices.scissors;

  rockRatio = (these.choices.rock / totalChoices) * 100;
  if (these.choices.rock === 0) {
    rockRatio = 0;
  }
  paperRatio = (these.choices.paper / totalChoices) * 100;
  if (these.choices.paper === 0) {
    paperRatio = 0;
  }
  scissorsRatio = (these.choices.scissors / totalChoices) * 100;
  if (these.choices.scissors === 0) {
    scissorsRatio = 0;
  }
  scissorsRatioForPiechart = scissorsRatio;
  scissorsRatioForPiechart += paperRatio; //needed for the correct ratio in the chart

  if (these.wins === 0 && these.losses === 0) {
    winRatio = 0;
    lossRatio = 0;
  }

  chart2.style.backgroundImage =
    "conic-gradient(" +
    paperColor +
    " 0 " +
    paperRatio.toString() +
    "%," +
    scissorsColor +
    " 0 " +
    scissorsRatioForPiechart.toString() +
    "%," +
    rockColor +
    " 0";

  //toFixed(n); n = the amount of decimal numbers
  data1.innerText = "wins: " + these.wins + " (" + winRatio.toFixed(1) + "%)";
  data2.innerText =
    "losses: " + these.losses + " (" + lossRatio.toFixed(1) + "%)";
  data3.innerText =
    "rock: " + these.choices.rock + " (" + rockRatio.toFixed(1) + "%)";
  data4.innerText =
    "paper: " + these.choices.paper + " (" + paperRatio.toFixed(1) + "%)";
  data5.innerText =
    "scissors: " +
    these.choices.scissors +
    " (" +
    scissorsRatio.toFixed(1) +
    "%)";
}
