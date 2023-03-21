const btnHold = document.querySelector(".btn-hold");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const score0 = document.getElementById("score-0");
const score1 = document.getElementById("score-1");

btnHold.addEventListener("click", () => {
  player0.classList.toggle("player-active");
  player1.classList.toggle("player-active");
});
