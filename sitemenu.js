import {
  menuButton,
  menuContainer,
  homeButton,
  homeContainer,
  gameButton,
  gameContainer,
  rulesButton,
  rulesContainer,
  statsButton,
  statsContainer,
} from "./elements.js";

const buttons = [homeButton, gameButton, rulesButton, statsButton];

const containers = [
  homeContainer,
  gameContainer,
  rulesContainer,
  statsContainer,
];

export function setsStartPageTo(container) {
  container.style.display = "grid";
  }

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
      } else {
        element.style.display = "";
      }
    }
  });
}
