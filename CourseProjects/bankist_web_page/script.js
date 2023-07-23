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

///////////////////////////////////////
// Cookie Message

const header = document.querySelector(`.header`);
const message = document.createElement(`div`);

message.classList.add(`cookie-message`);
message.innerHTML = `We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>`;

header.append(message);

message.style.height = `${
  Number.parseFloat(getComputedStyle(message).height) + 20
}px`;
message.style.backgroundColor = `#37383d`;
message.style.width = `100vw`;
message.style.transform = `translateY(-30%)`;

document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, function (e) {
    message.remove();
  });

///////////////////////////////////////
// NAV links smooth behavior + hovering animation

const navBar = document.querySelector(`.nav`);
const navLogo = document.querySelector(`.nav__logo`);
const navLinks = document.querySelectorAll(`.nav__link`);
const navList = document.querySelector(`.nav__links`);

const opacityChanger = function (e, opacity) {
  if (e.target.classList.contains(`nav__link`)) {
    navLinks.forEach(function (link) {
      if (e.target !== link) {
        link.style.opacity = opacity;
      }
    });
  }
};

navList.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    e.target.classList.contains(`nav__link`) &&
    !e.target.classList.contains(`nav__link--btn`)
  ) {
    const section = e.target.getAttribute(`href`);
    document.querySelector(section).scrollIntoView({ behavior: `smooth` });
  }
});

navBar.addEventListener(`mouseover`, function (e) {
  opacityChanger(e, `0.5`);
});

navBar.addEventListener(`mouseout`, function (e) {
  opacityChanger(e, `1`);
});
