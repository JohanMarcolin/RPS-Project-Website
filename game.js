//MAIN-MENU VARIABLES
let mainMenu = document.querySelector("#main-menu-container");
let nameInput = document.querySelector("#player-name");
let check3 = document.querySelector("#check-3");
let check5 = document.querySelector("#check-5");
let startButton = document.querySelector("#start-button");

//GAME-RUNNING VARIABLES
let gameRunning = document.querySelector("#game-running-container");
let comparedScore = document.querySelector("#compared-score-display");
let playerScore = document.querySelector("#player-score-display");
let computerScore = document.querySelector("#computer-score-display");
let playerName = document.querySelector("#player-name-display");
let roundResult = document.querySelector("#round-result-display");
let splitRoundResultPlayer = document.querySelector("#split-result-player");
let splitRoundResultComputer = document.querySelector("#split-result-display");

let rockElement = document.querySelector("#player-choice-rock");
let paperElement = document.querySelector("#player-choice-paper");
let scissorsElement = document.querySelector("#player-choice-scissors");

//GAME-OVER VARIABLES
let gameOver = document.querySelector("#game-over-container");
let finalComparedScore = document.querySelector("#final-compared-score-display");
let finalResult = document.querySelector("#final-result-display");
let rematchButton = document.querySelector("#rematch-button");
let returnToMainMenuButton = document.querySelector("#return-to-main-menu-button");


let game = { settings: { nameWasChosen: false, bestOf: null } };

let player = {
  name: null,
  choice: { made: false, type: "" },
  score: 0,
  stats: { choices: [], wins: [], losses: [] },
};
let computer = {
  name: "Computer",
  choice: { made: false, type: "" },
  score: 0,
  stats: { choices: [], wins: [], losses: [] },
};

nameInput.addEventListener("change", (event) => {
  player.name = event.target.value;
  game.settings.nameWasChosen = true;
  return player.name, game.settings;
});

check3.addEventListener("change", (event) => {
  if (!check3.checked) {
    game.settings.bestOf = null;
    return game.settings;
  }
  else {game.settings.bestOf = 3;
  return game.settings;
  };
});
check5.addEventListener("change", () => {
  if (!check5.checked) {
    game.settings.bestOf = null;
    return game.settings;
  }
  else {
    game.settings.bestOf = 5;
    return game.settings;
  }
});

//handles switch to next screen
startButton.addEventListener("click", () => {
  mainMenu.style.display = "none";
  gameRunning.style.display = "grid";
});

rockElement.addEventListener("click", () => {
  player.choice.made = true;
  player.choice.type = "rock";
  return player.choice;
});
paperElement.addEventListener("click", () => {
  player.choice.made = true;
  player.choice.type = "paper";
  return player.choice;
});
scissorsElement.addEventListener("click", () => {
  player.choice.made = true;
  player.choice.type = "scissors";
  return player.choice;
});

rematchButton.addEventListener("click", () => {
  player.score = 0;
  computer.score = 0;
  gameOver.style.display = "none";
  gameRunning.style.display = "grid";
  roundResult.innerText = "Result"
  return player.score, computer.score;
});

returnToMainMenuButton.addEventListener("click", () => {
  player.score = 0;
  computer.score = 0;
  gameOver.style.display = "none";
  mainMenu.style.display = "grid";
  roundResult.innerText = "Result"
  return player.score, computer.score;
});




const choices = ["rock", "paper", "scissors"];


export function runGame() {
  requestAnimationFrame(runGame);

//handles check boxes
if (check3.checked) {
  check5.setAttribute("disabled", "");
}
else if (!check3.checked) {
  check5.removeAttribute("disabled");
}
if (check5.checked) {
  check3.setAttribute("disabled", "");
}
else if (!check5.checked) {
  check3.removeAttribute("disabled");
}

  //handle settings required for start game
  if (player.name === null ||
    player.name === "" ||
     game.bestOf === null) {
      startButton.setAttribute("disabled", "");
  }
  else {
    startButton.removeAttribute("disabled");
  }

  //for laptops and desktops
  comparedScore.innerText = player.score + " : " + computer.score;

  //for phones and tablets
  playerScore.innerText = player.score;
  computerScore.innerText = computer.score;

  if (game.settings.nameWasChosen) {
    playerName.innerText = player.name;
  }

  if (player.choice.made === false) {
    return;
  }
  player.choice.made = false;

  console.log("Player: " + player.choice.type);
  computer.choice.type = choices[Math.floor(Math.random() * (3 - 0) + 0)];
  console.log("Computer: " + computer.choice.type);

  if (player.choice.type === computer.choice.type) {
    console.log("Draw");
    roundResult.innerText = "Draw";
  } else if (
    player.choice.type === "rock" &&
    computer.choice.type === "scissors"
  ) {
    roundResult.innerText = player.name + " wins the round!";
    player.score++;
  } else if (
    player.choice.type === "paper" &&
    computer.choice.type === "rock"
  ) {
    roundResult.innerText = player.name + " wins the round!";
    player.score++;
  } else if (
    player.choice.type === "scissors" &&
    computer.choice.type === "paper"
  ) {
    roundResult.innerText = player.name + " wins the round!";
    player.score++;
  } else if (
    player.choice.type === "rock" &&
    computer.choice.type === "paper"
  ) {
    roundResult.innerText = computer.name + " wins the round!";
    computer.score++;
  } else if (
    player.choice.type === "paper" &&
    computer.choice.type === "scissors"
  ) {
    roundResult.innerText = computer.name + " wins the round!";
    computer.score++;
  } else if (
    player.choice.type === "scissors" &&
    computer.choice.type === "rock"
  ) {
    roundResult.innerText = computer.name + " wins the round!";
    computer.score++;
  }

  console.log("Player: " + player.score + " Computer: " + computer.score);

  if (player.score === game.settings.bestOf - 1 && player.score > computer.score) {
    console.log(
      "Player wins - " +
        "Player: " +
        player.score +
        " Computer: " +
        computer.score
    );
    finalComparedScore.innerText = player.score + " : " + computer.score;
    finalResult.innerText = player.name + " wins the game!"

    setTimeout(function(){
      gameRunning.style.display = "none";
      gameOver.style.display = "grid";
   }, 200);
  } 
  else if (computer.score === game.settings.bestOf - 1 && computer.score > player.score) {
    console.log(
      "Computer wins - " +
        "Player: " +
        player.score +
        " Computer: " +
        computer.score
    );
    finalComparedScore.innerText = player.score + " : " + computer.score;
    finalResult.innerText = computer.name + " wins the game!"
  
    setTimeout(function(){
      gameRunning.style.display = "none";
      gameOver.style.display = "grid";
   }, 200);
  }
}
