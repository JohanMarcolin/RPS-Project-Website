const choices = ["rock", "paper", "scissors"];

let player = {name: "PC", choice: "", score: 0};
let computer = {name: "NPC", choice: "", score: 0};


export function runGame() {

for (let i = 0; i < 3; ++i) {
  player.choice = choices[Math.floor(Math.random() * (3 - 0) + 0)]
  console.log("Player " + player.choice)
  computer.choice = choices[Math.floor(Math.random() * (3 - 0) + 0)]
  console.log("Computer " + computer.choice)

  if (player.choice === computer.choice) {
    console.log("Draw")
    continue;
}
  else if (player.choice === "rock" && computer.choice === "scissors") {
    player.score++;
  }
  else if (player.choice === "paper" && computer.choice === "rock") {
    player.score++;
  }
  else if (player.choice === "scissors" && computer.choice === "paper") {
    player.score++;
  }
  else if (player.choice === "rock" && computer.choice === "paper") {
    computer.score++;
  }
  else if (player.choice === "paper" && computer.choice === "scissors") {
    computer.score++;
  }
  else if (player.choice === "scissors" && computer.choice === "rock") {
    computer.score++;

  }

}

if (player.score > computer.score) {
  console.log("Player wins - " + "Player: " + player.score + " Computer: " + computer.score)
}
else if (computer.score > player.score) {
  console.log("Computer wins - " + "Player: " + player.score + " Computer: " + computer.score)
}
else {
  console.log("It's a draw - " + "Player: " + player.score + " Computer: " + computer.score)
}
}