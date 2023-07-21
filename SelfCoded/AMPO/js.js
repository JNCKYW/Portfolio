const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

const btnNavList = document.querySelector(".nav-link");

btnNavList.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
