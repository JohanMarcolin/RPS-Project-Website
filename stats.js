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

import { game, computer } from "./game.js";

export function collectsComputerStats() {
  if (computer.choice.type === "rock") {
    game.stats.computer.choices.rock++;
  } else if (computer.choice.type === "paper") {
    game.stats.computer.choices.paper++;
  } else if (computer.choice.type === "scissors") {
    game.stats.computer.choices.scissors++;
  }
}

export function updatesGameStats() {
  handlesPieChart(
    game.stats.player,
    playerPieChartData1,
    "#FF6361",
    "#FFA600",
    playerPieChartData2,
    "#003F5C",
    "#BC5090",
    "#58508D",
    playerStatsWins,
    playerStatsLosses,
    playerStatsRock,
    playerStatsPaper,
    playerStatsScissors
  );
  handlesPieChart(
    game.stats.computer,
    computerPieChartData1,
    "#FF6361",
    "#FFA600",
    computerPieChartData2,
    "#003F5C",
    "#BC5090",
    "#58508D",
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
  let totalGames = these.wins + these.losses;

  let winRatio = (these.wins / totalGames) * 100;
  let lossRatio = (these.losses / totalGames) * 100;

  chart1.style.backgroundImage =
    "conic-gradient(" +
    winsColor +
    " 0 " +
    winRatio.toString() +
    "%," +
    lossesColor +
    " 0 100%)";

  let totalChoices =
    these.choices.rock + these.choices.paper + these.choices.scissors;

  let rockRatio = (these.choices.rock / totalChoices) * 100;
  let paperRatio = (these.choices.paper / totalChoices) * 100;
  let scissorsRatio = (these.choices.scissors / totalChoices) * 100;

  scissorsRatio += paperRatio;

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
    scissorsRatio.toString() +
    "%," +
    rockColor +
    " 0";

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
