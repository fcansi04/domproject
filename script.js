"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const navLinks = document.querySelectorAll(".nav__link");

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
