const dices = document.querySelector(".dice");
const roll = document.querySelector(".btn-roll");
const temp1 = document.querySelector("#current-0");
const temp2 = document.querySelector("#current-1");
const sum1 = document.querySelector("#score-0");
const sum2 = document.querySelector("#score-1");
const player1 = document.querySelector(".player-1");
const player0 = document.querySelector(".player-0");
const btnNew = document.querySelector(".btn-new");

let currentScore = 0;
let sum = sum1;
let temp = temp1;

roll.addEventListener("click", function () {
  let randomNum = Math.trunc(Math.random() * 6) + 1;
  dices.src = "./dice/dice-" + randomNum + ".png";
  dices.classList.remove("hidden");
  if (randomNum !== 1) {
    currentScore += randomNum;
    temp.innerText = currentScore;
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

btnNew.addEventListener("click", () => {
  window.location.reload();
});
