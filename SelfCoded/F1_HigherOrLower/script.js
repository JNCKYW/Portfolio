"use strict";

//###############################
//WSZYSTKIE PRZYCISKI NA STRONIE
//###############################

const btnNgEl = document.getElementById(`btn--ng`);
const btnResEl = document.getElementById(`btn--res`);
const btnHigherEl = document.querySelector(`.btn--higher`);
const btnLowerEl = document.querySelector(`.btn--lower`);
const btnEvenEl = document.querySelector(`.btn--even`);
const btnNewPairEl = document.getElementById(`btn--new-pair`);

//###############################
//SELEKTORY
//###############################

const arr = [
  [`Sebastian Vettel`, 53],
  [`Max Verstappen`, 37],
  [`Ayrton Senna`, 41],
  [`Alain Prost`, 51],
  [`Nigel Mansell`, 31],
  [`Juan Fangio`, 24],
  [`James Hunt`, 10],
  [`Niki Lauda`, 25],
  [`Fernando Alonso`, 32],
  [`Charles Leclerc`, 5],
  [`Sergio Perez`, 6],
  [`Valtteri Bottas`, 10],
  [`Lewis Hamilton`, 103],
  [`Kimi Raikkonen`, 21],
  [`Mika Hakkinen`, 20],
  [`Michael Schumacher`, 91],
  [`Pierre Gasly`, 1],
  [`Jim Clark`, 25],
  [`Jackie Stewart`, 27],
  [`Felipe Massa`, 11],
  [`Jenson Button`, 15],
  [`Nico Rosberg`, 23],
  [`Daniel Riccardo`, 8],
  [`Jacques Villneuve`, 11],
  [`Nelson Piquet`, 23],
  [`Emerson Fittipaldi`, 14],
  [`Damon Hill`, 22],
  [`Mario Andretti`, 12],
  [`Rubens Barichello`, 11],
  [`Mark Webber`, 9],
];

let driver1;
let driver2;
let driver1Wins;
let driver2Wins;
let roundsCounter = 1;
let score = 0;

//###############################
//FUNKCJE
//###############################

function randomDriver() {
  driver1 = Math.trunc(Math.random() * 30 + 1);
  driver2 = Math.trunc(Math.random() * 30 + 1);
  if (driver2 === driver1) {
    driver2 = Math.trunc(Math.random() * 30 + 1);
  }
  document.getElementById(`driver1-img`).src = `img/driver-${driver1}.jpg`;
  document.getElementById(`driver2-img`).src = `img/driver-${driver2}.jpg`;
  document.getElementById(`driver1-name`).textContent = `${
    arr[driver1 - 1][0]
  }`;
  document.querySelector(`.driver-1--name`).textContent = `${
    arr[driver1 - 1][0]
  }`;
  document.getElementById(`driver2-name`).textContent = `${
    arr[driver2 - 1][0]
  }`;
  document.querySelector(`.driver-2--name`).textContent = `${
    arr[driver2 - 1][0]
  }`;
  driver1Wins = arr[driver1 - 1][1];
  driver2Wins = arr[driver2 - 1][1];
}

function toggleHidden() {
  document.getElementById(`driver-1`).classList.toggle(`hidden`);
  document.getElementById(`driver-2`).classList.toggle(`hidden`);
  document.querySelector(`.description`).classList.toggle(`hidden`);
  document.querySelector(`.points-box`).classList.toggle(`hidden`);
  document.querySelector(`.btns-hel-box`).classList.toggle(`hidden`);
  document.getElementById(`btn--res`).classList.toggle(`hidden`);
  document.getElementById(`btn--ng`).classList.toggle(`hidden`);
}

function scoreRoundZero() {
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.rounds-counter`).textContent = roundsCounter;
}

function win() {
  score++;
  document.querySelector(`.score`).textContent = score;
  document.getElementById(`driver-1`).classList.add(`box-shadow-win`);
  document.getElementById(`driver-2`).classList.add(`box-shadow-win`);
}

function wrong() {
  document.getElementById(`driver-1`).classList.add(`box-shadow-wrong`);
  document.getElementById(`driver-2`).classList.add(`box-shadow-wrong`);
}

function restLogic() {
  document.getElementById(`driver1-wins`).textContent = `${driver1Wins} 🏆`;
  document.getElementById(`driver2-wins`).textContent = `${driver2Wins} 🏆`;
  roundsCounter++;
  document.querySelector(`.btns-hel-box`).classList.toggle(`hidden`);
  document.getElementById(`btn--new-pair`).classList.toggle(`hidden`);
}

function removeBoxShadowWins() {
  document.getElementById(`driver-1`).classList.remove(`box-shadow-wrong`);
  document.getElementById(`driver-2`).classList.remove(`box-shadow-wrong`);
  document.getElementById(`driver-1`).classList.remove(`box-shadow-win`);
  document.getElementById(`driver-2`).classList.remove(`box-shadow-win`);
  document.getElementById(`driver1-wins`).textContent = `?`;
  document.getElementById(`driver2-wins`).textContent = `?`;
}
//###############################
//LOGIKA
//###############################

btnNgEl.addEventListener(`click`, function () {
  randomDriver();
  toggleHidden();
  scoreRoundZero();
});

btnHigherEl.addEventListener(`click`, function () {
  if (driver1Wins > driver2Wins) {
    win();
  } else {
    wrong();
  }
  restLogic();
});

btnEvenEl.addEventListener(`click`, function () {
  if (driver1Wins === driver2Wins) {
    win();
  } else {
    wrong();
  }
  restLogic();
});

btnLowerEl.addEventListener(`click`, function () {
  if (driver1Wins < driver2Wins) {
    win();
  } else {
    wrong();
  }
  restLogic();
});

btnNewPairEl.addEventListener(`click`, function () {
  document.querySelector(`.btns-hel-box`).classList.toggle(`hidden`);
  document.getElementById(`btn--new-pair`).classList.toggle(`hidden`);
  document.querySelector(`.rounds-counter`).textContent = roundsCounter;
  randomDriver();
  removeBoxShadowWins();
});

btnResEl.addEventListener(`click`, function () {
  roundsCounter = 1;
  score = 0;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.rounds-counter`).textContent = roundsCounter;
  randomDriver();
  toggleHidden();
  document.querySelector(`.btns-hel-box`).classList.add(`hidden`);
  document.getElementById(`btn--new-pair`).classList.add(`hidden`);
  removeBoxShadowWins();
});
