import { player, computer } from "./game.js";
import {
  roundResult,
  compactRoundResult,
  finalComparedScore,
  finalResult,
} from "./elements.js";

export function showsResultsForAllScreenWidths(string1, string2) {
  setTimeout(() => {
    roundResult.innerText = string1;
    compactRoundResult.innerText = string2;
  }, 2000);
  setTimeout(() => {
    roundResult.innerText = "";
    compactRoundResult.innerText = "";
  }, 4000);
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
