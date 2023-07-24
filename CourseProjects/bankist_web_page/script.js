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

///////////////////////////////////////
// Tabbed component

const tabContainer = document.querySelector(`.operations__tab-container`);
const tabs = document.querySelectorAll(`.operations__tab`);
const contentElelemnts = document.querySelectorAll(`.operations__content`);

tabContainer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const tab = e.target.closest(`.btn`);

  if (tab !== null && tab.classList.contains(`btn`)) {
    tabs.forEach(function (x) {
      x.classList.remove(`operations__tab--active`);
    });
    tab.classList.add(`operations__tab--active`);

    contentElelemnts.forEach(function (el) {
      el.classList.remove(`operations__content--active`);
    });
    document
      .querySelector(`.operations__content--${tab.dataset.tab}`)
      .classList.add(`operations__content--active`);
  }
});

///////////////////////////////////////
// Sections fading in

const sections = document.querySelectorAll(`.section`);

const obsFn = function (entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;
  entry.target.classList.remove(`section--hidden`);
  observer.unobserve(entry.target);
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const sectionObserver = new IntersectionObserver(obsFn, obsOptions);

sections.forEach(function (section) {
  section.classList.add(`section--hidden`);
  sectionObserver.observe(section);
});
