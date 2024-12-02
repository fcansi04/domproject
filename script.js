"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const navLinks = document.querySelectorAll(".nav__link");
const navContanier = document.querySelector(".nav");
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

let section1 = document.querySelector("#section--1");
let section2 = document.querySelector("#section--2");
let section3 = document.querySelector("#section--3");

let btnScroll = document.querySelector(".btn--scroll-to");
const s1coord = section1.getBoundingClientRect();
console.log(s1coord);

btnScroll.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 742,
    behavior: "smooth",
  });
});

/*
navLinks.forEach(el =>
  el.addEventListener("click", function (e) {
    e.preventDefault();
    let id = el.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  })
);
*/

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    let id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const operationCont = document.querySelector(".operations__tab-container");
const operationsBtn = document.querySelectorAll(".operations__tab");
const opContents = document.querySelectorAll(".operations__content ");

operationCont.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;

  operationsBtn.forEach(r => r.classList.remove("operations__tab--active"));

  clicked.classList.add("operations__tab--active");
  const active_content = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  opContents.forEach(c => c.classList.remove("operations__content--active"));
  active_content.classList.add("operations__content--active");
});

/*
window.addEventListener("scroll", function () {
  //console.log(navContanier.getBoundingClientRect());
  if (window.scrollY > 742) {
    navContanier.classList.add("sticky");
  } else {
    navContanier.classList.remove("sticky");
  }
});
*/

const callback = function (entries, observer) {
  if (entries[0].isIntersecting == false) navContanier.classList.add("sticky");
  else navContanier.classList.remove("sticky");
};

const obsObtions = {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
};

const observer = new IntersectionObserver(callback, obsObtions);
const header = document.querySelector(".header");
observer.observe(header);
