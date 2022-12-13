import { setupMenu, setsStartPageTo } from "./sitemenu.js";
import { runGame } from "./game.js";
import { homeContainer } from "./elements.js";

setupMenu();
setsStartPageTo(homeContainer);
runGame();
