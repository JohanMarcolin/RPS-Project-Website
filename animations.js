import { computerRockElement, computerPaperElement, computerScissorsElement } from "./elements.js";

export function animatesPlayerElement(player, targetElement, animation) {
    player.choice.animating = true;
    targetElement.setAttribute("class", animation)
    setTimeout(function(){
    targetElement.removeAttribute("class", animation)
    player.choice.animating = false;
   }, 3000);
}

export function animatesComputerElement(computer, animation) {

    if (computer.choice.type === "rock") {
        computer.choice.animating = true;
        computerRockElement.setAttribute("class", animation)
        setTimeout(function(){
        computerRockElement.removeAttribute("class", animation)
        computer.choice.animating = false;
       }, 3000);
    }
    if (computer.choice.type === "paper") {
        computer.choice.animating = true;
        computerPaperElement.setAttribute("class", animation)
        setTimeout(function(){
        computerPaperElement.removeAttribute("class", animation)
        computer.choice.animating = false;
       }, 3000);
    }
    if (computer.choice.type === "scissors") {
        computer.choice.animating = true;
        computerScissorsElement.setAttribute("class", animation)
        setTimeout(function(){
        computerScissorsElement.removeAttribute("class", animation)
        computer.choice.animating = false;
       }, 3000);
    }
}