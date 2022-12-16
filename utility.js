import { player, computer } from "./game.js";
import {
  roundResult,
  compactRoundResult,
  finalComparedScore,
  finalResult,
} from "./elements.js";

//the amount of time after the choices are made -> that the result is shown
let showResultAfterThisTime = 2000; //ms
//-||- -> that the result is removed
let removeResultAfterThisTime = 4000; //ms

export function showsResultsForAllScreenWidths(string1, string2) {
  setTimeout(() => {
    roundResult.innerText = string1;
    compactRoundResult.innerText = string2;
  }, showResultAfterThisTime);
  setTimeout(() => {
    roundResult.innerText = "";
    compactRoundResult.innerText = "";
  }, removeResultAfterThisTime);
}

export function showsFinalScoresAndResults(string) {
  finalComparedScore.innerText = player.score + " : " + computer.score;
  finalResult.innerText = string;
}

export function switchesToNextContainerAfterThisTime(
  thisContainer,
  nextContainer,
  timeInMs
) {
  setTimeout(function () {
    thisContainer.style.display = "none";
    nextContainer.style.display = "grid";
  }, timeInMs);
}
