const dices = document.querySelector(".dice");
const roll = document.querySelector(".btn-roll");
const temp1 = document.getElementById("current-0");
const temp2 = document.getElementById("current-1");
const sum1 = document.getElementById("score-0");
const sum2 = document.getElementById("score-1");
const player1 = document.querySelector(".player-1");
const player0 = document.querySelector(".player-0");
const btnNew = document.querySelector(".btn-new");
const btnHold = document.querySelector(".btn-hold");
const winner = document.querySelector(".winner");

let currentScore = 0;
let sum = sum1;
let temp = temp1;
let result0 = 0;
let result1 = 0;

roll.addEventListener("click", function () {
  let randomNum = Math.trunc(Math.random() * 6) + 1;
  dices.src = "./dice/dice-" + randomNum + ".png";
  dices.classList.remove("hidden");
  if (randomNum !== 1) {
    currentScore += randomNum;
    temp.innerText = currentScore;
    // result += currentScore;
  } else if (randomNum === 1) {
    currentScore = 0;
    temp.innerText = currentScore;
    if (temp === temp1) {
      temp = temp2;
      sum = sum2;
      player1.classList.add("player-active");
      player0.classList.remove("player-active");
    } else if (temp === temp2) {
      temp = temp1;
      sum = sum1;
      player0.classList.add("player-active");
      player1.classList.remove("player-active");
    }
  }
});

btnHold.addEventListener("click", () => {
  player0.classList.toggle("player-active");
  player1.classList.toggle("player-active");
  if (temp === temp1) {
    result0 += currentScore;
    temp = temp2;
    sum = sum2;
    player1.classList.add("player-active");
    player0.classList.remove("player-active");
    sum1.textContent = result0;
    temp1.textContent = "0";
    currentScore = 0;
  } else if (temp === temp2) {
    result1 += currentScore;
    temp = temp1;
    sum = sum1;
    player0.classList.add("player-active");
    player1.classList.remove("player-active");
    sum2.textContent = result1;
    temp2.textContent = "0";
    currentScore = 0;
  }
  if (sum1.textContent >= 100) {
    winner.innerText = "🏆 Player 1 Wins 🏆";
    winner.style.display = "grid";
    btnNew.style.zIndex = "1";
  }
  if (sum2.textContent >= 100) {
    winner.innerText = "🏆 Player 2 Wins 🏆";
    winner.style.display = "grid";
    btnNew.style.zIndex = "1";
  }
});

btnNew.addEventListener("click", () => {
  window.location.reload();
});
