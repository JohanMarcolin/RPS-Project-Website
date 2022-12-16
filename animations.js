import { player, computer } from "./game.js";

import {
  computerRockElement,
  computerPaperElement,
  computerScissorsElement,
} from "./elements.js";

//the duration currently set in game-animations.css (equal for all animation classes)
let animationDuration = 2000; //ms
//the pause duration after animating, before the element returns to its start position
let pausePostAnimation = 1000;

let animationLoopTime = animationDuration + pausePostAnimation;

export function animatesPlayerElement(targetElement, animation) {
  player.choice.animating = true;
  targetElement.setAttribute("class", animation);
  setTimeout(function () {
    targetElement.removeAttribute("class", animation);
    player.choice.animating = false;
  }, animationLoopTime);
}

export function animatesComputerElement(animation) {
  if (computer.choice.type === "rock") {
    targetsThisElementAndRunsAnimationForThisTime(
      computerRockElement,
      animationLoopTime
    );
  }
  if (computer.choice.type === "paper") {
    targetsThisElementAndRunsAnimationForThisTime(
      computerPaperElement,
      animationLoopTime
    );
  }
  if (computer.choice.type === "scissors") {
    targetsThisElementAndRunsAnimationForThisTime(
      computerScissorsElement,
      animationLoopTime
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
