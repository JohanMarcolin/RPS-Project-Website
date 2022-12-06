//MAIN-MENU VARIABLES
let nameInput = document.querySelector("#player-name");
let check3 = document.querySelector("#check-3");
let check5 = document.querySelector("#check-5");
let startButton = document.querySelector("#start-button");

//GAME-RUNNING VARIABLES
let comparedScore = document.querySelector("#compared-score-display");
let playerScore = document.querySelector("#player-score-display");
let computerScore = document.querySelector("#computer-score-display");
let playerName = document.querySelector("#player-name-display");
let roundResult = document.querySelector("#round-result-display");

let rockElement = document.querySelector("#player-choice-rock");
let paperElement = document.querySelector("#player-choice-paper");
let scissorsElement = document.querySelector("#player-choice-scissors");

//GAME-OVER VARIABLES
let finalComparedScore = document.querySelector("#final-compared-score-display");
let finalResult = document.querySelector("#final-result-display");


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

check3.addEventListener("click", (event) => {
  
  game.settings.bestOf = 3;
 
  return game.settings;
});
check5.addEventListener("click", () => {
  game.settings.bestOf = 5;

  return game.settings;
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
  if (player.name !== null ||
    player.name !== "" &&
     check3.checked ||
     check5.checked) {
      startButton.removeAttribute("disabled");
  }
  else {
    startButton.setAttribute("disabled", "");
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
  } else if (computer.score === game.settings.bestOf - 1 && computer.score > player.score) {
    console.log(
      "Computer wins - " +
        "Player: " +
        player.score +
        " Computer: " +
        computer.score
    );
    finalComparedScore.innerText = player.score + " : " + computer.score;
    finalResult.innerText = computer.name + " wins the game!"
  }
}
