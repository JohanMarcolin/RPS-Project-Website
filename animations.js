import { player, computer } from "./game.js";

import {
  computerRockElement,
  computerPaperElement,
  computerScissorsElement,
} from "./elements.js";

export function animatesPlayerElement(targetElement, animation) {
  player.choice.animating = true;
  targetElement.setAttribute("class", animation);
  setTimeout(function () {
    targetElement.removeAttribute("class", animation);
    player.choice.animating = false;
  }, 3000);
}

export function animatesComputerElement(animation) {
  if (computer.choice.type === "rock") {
    targetsThisElementAndRunsAnimationForThisTime(computerRockElement, 3000);
  }
  if (computer.choice.type === "paper") {
    targetsThisElementAndRunsAnimationForThisTime(computerPaperElement, 3000);
  }
  if (computer.choice.type === "scissors") {
    targetsThisElementAndRunsAnimationForThisTime(
      computerScissorsElement,
      3000
    );
  }

  function targetsThisElementAndRunsAnimationForThisTime(element, timeInMs) {
    computer.choice.animating = true;
    element.setAttribute("class", animation);
    setTimeout(function () {
      element.removeAttribute("class", animation);
      computer.choice.animating = false;
    }, timeInMs);
  }
}
