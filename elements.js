//contains all elements that are used for DOM manipulation

//THE SITE MENU
export let barsIcon = document.querySelector("#bars-icon");
export let crossIcon = document.querySelector("#cross-icon");
export let menuContainer = document.querySelector("#nav-container");
export let homeButton = document.querySelector("#nav-home");
export let homeContainer = document.querySelector("#home-container");
export let gameButton = document.querySelector("#nav-game");
export let gameContainer = document.querySelector("#game-container");
export let rulesButton = document.querySelector("#nav-rules");
export let rulesContainer = document.querySelector("#rules-container");
export let statsButton = document.querySelector("#nav-stats");
export let statsContainer = document.querySelector("#stats-container");

//GAME-MENU CONTAINER
export let mainMenu = document.querySelector("#main-menu-container");
export let nameInput = document.querySelector("#player-name");
export let check3 = document.querySelector("#check-3");
export let check5 = document.querySelector("#check-5");
export let startButton = document.querySelector("#start-button");

//GAME-RUNNING CONTAINER
export let gameRunning = document.querySelector("#game-running-container");
export let comparedScore = document.querySelector("#compared-score-display");
export let playerScore = document.querySelector("#player-score-display");
export let computerScore = document.querySelector("#computer-score-display");
export let playerName = document.querySelector("#player-name-display");
export let roundResult = document.querySelector("#round-result-display");

//ELEMENTS FOR DIFFERENT LAYOUT WITH A SCREEN WIDTH OF 700PX < AND IN PHONE VIEW
export let compactRoundResult = document.querySelector("#compact-round-result");

//PLAYER CHOICE
export let rockElement = document.querySelector("#player-choice-rock");
export let paperElement = document.querySelector("#player-choice-paper");
export let scissorsElement = document.querySelector("#player-choice-scissors");

//COMPUTER CHOICE
export let computerRockElement = document.querySelector(
  "#computer-choice-rock"
);
export let computerPaperElement = document.querySelector(
  "#computer-choice-paper"
);
export let computerScissorsElement = document.querySelector(
  "#computer-choice-scissors"
);

//GAME-OVER
export let gameOver = document.querySelector("#game-over-container");
export let finalComparedScore = document.querySelector(
  "#final-compared-score-display"
);
export let finalResult = document.querySelector("#final-result-display");
export let rematchButton = document.querySelector("#rematch-button");
export let returnToMainMenuButton = document.querySelector(
  "#return-to-main-menu-button"
);
//STATS
//PLAYER PIE-CHART
export let playerPieChartData1 = document.querySelector(
  "#player-stats-wins-and-losses"
);
export let playerPieChartData2 = document.querySelector(
  "#player-stats-choices"
);

//COMPUTER PIE-CHART
export let computerPieChartData1 = document.querySelector(
  "#computer-stats-wins-and-losses"
);
export let computerPieChartData2 = document.querySelector(
  "#computer-stats-choices"
);
//PLAYER NUMERIC STATS
export let playerStatsWins = document.querySelector("#player-stats-wins");
export let playerStatsLosses = document.querySelector("#player-stats-losses");
export let playerStatsRock = document.querySelector("#player-stats-rock");
export let playerStatsPaper = document.querySelector("#player-stats-paper");
export let playerStatsScissors = document.querySelector(
  "#player-stats-scissors"
);
//COMPUTER NUMERIC STATS
export let computerStatsWins = document.querySelector("#computer-stats-wins");
export let computerStatsLosses = document.querySelector(
  "#computer-stats-losses"
);
export let computerStatsRock = document.querySelector("#computer-stats-rock");
export let computerStatsPaper = document.querySelector("#computer-stats-paper");
export let computerStatsScissors = document.querySelector(
  "#computer-stats-scissors"
);
