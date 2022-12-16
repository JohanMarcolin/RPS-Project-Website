import {
  barsIcon,
  crossIcon,
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
  barsIcon.style.display = "flex"; //icon showing when menu is hidden
  togglesMenuWhenIconIsClicked(barsIcon, crossIcon, menuContainer);
  for (let i = 0; i < buttons.length && i < containers.length; ++i) {
    togglesContentWhenClicked(buttons[i], containers[i]);
    closesMenuWhenClickingOutsideMenuBoundary(buttons[i], barsIcon, crossIcon);
  }
}

export function togglesMenuWhenIconIsClicked(bars, cross, container) {
  bars.addEventListener("click", () => {
    bars.style.display = "";
    container.style.display = "flex";
    cross.style.display = "flex";
  });
  cross.addEventListener("click", () => {
    bars.style.display = "flex";
    container.style.display = "";
    cross.style.display = "";
  });
}

export function closesMenuWhenClickingOutsideMenuBoundary(
  buttons,
  bars,
  cross
) {
  window.addEventListener("mouseup", function (event) {
    if (event.target !== buttons && window.innerWidth <= 700) {
      //same screen width as media query for menu change in site-menu.css
      menuContainer.style.display = "";
      bars.style.display = "flex";
      cross.style.display = "";
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
