//Declare variables
let currentPlayer = "x";
let gameEnded = false;
let gameMoves = new Array(9).fill("");

//GET DOM
const boxes = document.querySelectorAll("td");
const table = document.querySelector("table");
const gamescore = document.querySelector("#game-score");
let player = document.querySelector("#player");
let text = document.querySelector("#text");

//add event listener to table boxes
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (!gameEnded && gameMoves[index] === "") {
      gameMoves[index] = currentPlayer;
      box.textContent = currentPlayer;
      //check for winner
      if (gameWin()) {
        table.style.display = "none";
        gamescore.style.display = "block";
        player.textContent = currentPlayer;
        text.textContent = "WINNER";
        gameEnded = true;
      }
      //check for tie
      else if (gameTie()) {
        table.style.display = "none";
        gamescore.style.display = "block";
        player.textContent = "XO";
        text.textContent = "DRAW";
        gameEnded = true;
      } else {
        currentPlayer = currentPlayer == "x" ? "0" : "x";
      }
    }
  });
});

//check for winner function
const gameWin = () => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], //rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //columns
    [0, 4, 8],
    [2, 4, 6], //diagonal
  ];
  return winningCombos.some((combo) =>
    combo.every((index) => gameMoves[index] === currentPlayer)
  );
};

//check for tie function
const gameTie = () => {
  return gameMoves.every((move) => move != "");
};

//Reset game function
const resetGame = () => {
  table.style.display = "block";
  gamescore.style.display = "none";
  currentPlayer = "x";
  gameEnded = false;
  gameMoves = new Array(9).fill("");
  boxes.forEach((box) => (box.textContent = ""));
};

//Event Listener for reset button
const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", resetGame);
