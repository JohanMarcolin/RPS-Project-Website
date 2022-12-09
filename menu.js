let menuButton = document.querySelector("#menu-button-box");
let menuContainer = document.querySelector("#nav-container");

let homeButton = document.querySelector("#nav-home");
let homeContainer = document.querySelector("#home-container");

let gameButton = document.querySelector("#nav-game");
let gameContainer = document.querySelector("#game-container");

let rulesButton = document.querySelector("#nav-rules");
let rulesContainer = document.querySelector("#rules-container");

let statsButton = document.querySelector("#nav-stats");
let statsContainer = document.querySelector("#stats-container");

export let buttons = [
    homeButton, 
    gameButton, 
    rulesButton, 
    statsButton];
    
export let containers = [
  homeContainer,
  gameContainer,
  rulesContainer,
  statsContainer,
];
//HOME CONTAINER
homeContainer.style.display = "grid";

export function setupMenu() {
  togglesMenuWhenClicked(menuButton, menuContainer);
  for (let i = 0; i < buttons.length && i < containers.length; ++i) {
    togglesContentWhenClicked(buttons[i], containers[i]);
  }
}

export function togglesMenuWhenClicked(button, container) {
  button.addEventListener("click", (event) => {
    if (container.style.display === "") {
      container.style.display = "flex";
    } else {
      container.style.display = "";
    }
  });
}

export function togglesContentWhenClicked(button, content) {
  button.addEventListener("click", () => {
    for (let i = 0; i < containers.length; ++i) {
      let element = containers[i];

      if (element === content) {
        element.style.display = "grid";
      }
      else {
        element.style.display = "";
      }
    }
  });
}
