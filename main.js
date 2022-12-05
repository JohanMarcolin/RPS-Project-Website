let menuButton = document.querySelector("#menu-button");
let menuContainer = document.querySelector("#nav-container");

let homeButton = document.querySelector("#nav-home");
let homeContainer = document.querySelector("#home-container");

let gameButton = document.querySelector("#nav-game");
let gameContainer = document.querySelector("#game-container");

let rulesButton = document.querySelector("#nav-rules");
let rulesContainer = document.querySelector("#rules-container");

let statsButton = document.querySelector("#nav-stats");
let statsContainer = document.querySelector("#stats-container");

menuButton.addEventListener("click", (event) => {
  if (menuContainer.style.display === "") {
    menuContainer.style.display = "flex";
  } else {
    menuContainer.style.display = "";
  }
});

homeContainer.style.display = "flex";

let buttons = [homeButton, gameButton, rulesButton, statsButton];
let containers = [homeContainer, gameContainer, rulesContainer, statsContainer];

console.log(containers);

function displaysContentWhenClicked(button, content) {
  button.addEventListener("click", () => {
    for (let i = 0; i < containers.length; ++i) {
      let element = containers[i];

      if (element === content) {
        element.style.display = "flex";
      } else {
        element.style.display = "";
      }
    }
  });
}

displaysContentWhenClicked(homeButton, homeContainer);
displaysContentWhenClicked(gameButton, gameContainer);
displaysContentWhenClicked(rulesButton, rulesContainer);
displaysContentWhenClicked(statsButton, statsContainer);
