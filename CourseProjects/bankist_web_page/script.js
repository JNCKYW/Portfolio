"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

btnsOpenModal.forEach(function (button) {
  button.addEventListener(`click`, function (e) {
    e.preventDefault();
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
  });
});

btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === "Escape") {
    closeModal(e);
  }
});

///////////////////////////////////////
// Btn learn more

const btnLearnMore = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnLearnMore.addEventListener(`click`, function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: `smooth` });
});
