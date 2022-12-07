import {
  /* main menu elements */
  mainMenu,
  nameInput,
  check3,
  check5,
  startButton,
  /* game running elements */
  gameRunning,
  comparedScore,
  playerScore,
  computerScore,
  playerName,
  roundResult,
  splitRoundResultPlayer,
  splitRoundResultComputer,
  rockElement,
  paperElement,
  scissorsElement,
  /*  game over elements */
  gameOver,
  finalComparedScore,
  finalResult,
  rematchButton,
  returnToMainMenuButton,
} from "./elements.js";

import {
  handleChange,
  handleCheckbox,
  handleClick,
  handleStartButton,
} from "./events.js";

export let game = {
  settings: { nameWasChosen: false, bestOf: null },
};

export let player = {
  name: null,
  choice: { made: false, type: "" },
  score: 0,
  stats: { choices: [], wins: [], losses: [] },
};
export let computer = {
  name: "Computer",
  choice: { made: false, type: "" },
  score: 0,
  stats: { choices: [], wins: [], losses: [] },
};

const choices = ["rock", "paper", "scissors"];

nameInput.addEventListener("change", handleChange);
check3.addEventListener("change", handleChange);
check5.addEventListener("change", handleChange);

startButton.addEventListener("click", handleClick);
rockElement.addEventListener("click", handleClick);
paperElement.addEventListener("click", handleClick);
scissorsElement.addEventListener("click", handleClick);
rematchButton.addEventListener("click", handleClick);
returnToMainMenuButton.addEventListener("click", handleClick);

export function runGame() {
  requestAnimationFrame(runGame);

  //menu events
  handleCheckbox();
  handleStartButton();

  //dynamic content for game interface
  showScore();
  showNames();

  //player chooses R, P or S
  if (!player.choice.made) {
    return;
  }
  else {
    player.choice.made = false;
  }
  console.log("Player: " + player.choice.type);

  //computer chooses R, P or S
  computer.choice.type = choices[Math.floor(Math.random() * (3 - 0) + 0)];
  console.log("Computer: " + computer.choice.type);

  //game logic
  if (player.choice.type === computer.choice.type) {
    console.log("Draw");
    roundResult.innerText = "Draw";
    splitRoundResultPlayer.innerText = "Draw";
    splitRoundResultComputer.innerText = "Draw";
  } else if (
    player.choice.type === "rock" &&
    computer.choice.type === "scissors"
  ) {
    roundResult.innerText = player.name + " wins the round!";
    splitRoundResultPlayer.innerText = player.name + " wins the round!";
    splitRoundResultComputer.innerText = " ";
    player.score++;
  } else if (
    player.choice.type === "paper" &&
    computer.choice.type === "rock"
  ) {
    roundResult.innerText = player.name + " wins the round!";
    splitRoundResultPlayer.innerText = player.name + " wins the round!";
    splitRoundResultComputer.innerText = " ";
    player.score++;
  } else if (
    player.choice.type === "scissors" &&
    computer.choice.type === "paper"
  ) {
    roundResult.innerText = player.name + " wins the round!";
    splitRoundResultPlayer.innerText = player.name + " wins the round!";
    splitRoundResultComputer.innerText = " ";
    player.score++;
  } else if (
    player.choice.type === "rock" &&
    computer.choice.type === "paper"
  ) {
    roundResult.innerText = computer.name + " wins the round!";
    splitRoundResultPlayer.innerText = " ";
    splitRoundResultComputer.innerText = computer.name + " wins the round!";
    computer.score++;
  } else if (
    player.choice.type === "paper" &&
    computer.choice.type === "scissors"
  ) {
    roundResult.innerText = computer.name + " wins the round!";
    splitRoundResultPlayer.innerText = " ";
    splitRoundResultComputer.innerText = computer.name + " wins the round!";
    computer.score++;
  } else if (
    player.choice.type === "scissors" &&
    computer.choice.type === "rock"
  ) {
    roundResult.innerText = computer.name + " wins the round!";
    splitRoundResultPlayer.innerText = " ";
    splitRoundResultComputer.innerText = computer.name + " wins the round!";
    computer.score++;
  }

  console.log("Player: " + player.score + " Computer: " + computer.score);

  if (
    player.score === game.settings.bestOf - 1 &&
    player.score > computer.score
  ) {
    console.log(
      "Player wins - " +
        "Player: " +
        player.score +
        " Computer: " +
        computer.score
    );
    finalComparedScore.innerText = player.score + " : " + computer.score;
    finalResult.innerText = player.name + " wins the game!";

    setTimeout(function () {
      gameRunning.style.display = "none";
      gameOver.style.display = "grid";
    }, 200);
  } else if (
    computer.score === game.settings.bestOf - 1 &&
    computer.score > player.score
  ) {
    console.log(
      "Computer wins - " +
        "Player: " +
        player.score +
        " Computer: " +
        computer.score
    );
    finalComparedScore.innerText = player.score + " : " + computer.score;
    finalResult.innerText = computer.name + " wins the game!";

    setTimeout(function () {
      gameRunning.style.display = "none";
      gameOver.style.display = "grid";
    }, 200);
  }
}

function showScore() {
  //for laptops and desktops
  comparedScore.innerText = player.score + " : " + computer.score;

  //for phones and tablets
  playerScore.innerText = player.score;
  computerScore.innerText = computer.score;
}

function showNames() {
  if (game.settings.nameWasChosen) {
    playerName.innerText = player.name;
  }
}
