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

export function showsResultsForAllScreenWidths(string1, string2, string3) {
    roundResult.innerText = string1;
    splitRoundResultPlayer.innerText = string2;
    splitRoundResultComputer.innerText = string3;
}

export function showsFinalScoresAndResults(string) {
    finalComparedScore.innerText = player.score + " : " + computer.score;
    finalResult.innerText = string;
}

export function switchesToNextContainerAfterThisTime(thisContainer, nextContainer, ms) {
    setTimeout(function () {
        thisContainer.style.display = "none";
        nextContainer.style.display = "grid";
      }, ms);
}