"use strict";

// Selectors
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const homeSection = document.getElementById("home");
const sermonsSection = document.getElementById("sermons");
const givingSection = document.getElementById("giving");
const locationSection = document.getElementById("location");
const contactSection = document.getElementById("contact");
const announcementsSection = document.getElementById("announcements");
const navLinks = document.querySelector(".nav__links");

const allSections = document.querySelectorAll(".section-container");

const handleHover = function (e) {
  // alert(e);
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
  }
};

const revealSection = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");

  sectionObserver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// const navSectionObserver = new IntersectionObserver({});

// Event listeners
window.addEventListener("scroll", function (e) {
  if (
    window.scrollY >= homeSection.offsetTop &&
    window.scrollY < sermonsSection.offsetTop
  ) {
    nav
      .querySelectorAll(".nav__link")
      .forEach((n) => n.classList.remove("nav--active"));

    document.getElementById("nav-home").classList.add("nav--active");
  } else if (
    window.scrollY >= sermonsSection.offsetTop &&
    window.scrollY < givingSection.offsetTop
  ) {
    nav
      .querySelectorAll(".nav__link")
      .forEach((n) => n.classList.remove("nav--active"));

    document.getElementById("nav-sermons").classList.add("nav--active");
  } else if (
    window.scrollY >= givingSection.offsetTop &&
    window.scrollY < locationSection.offsetTop
  ) {
    nav
      .querySelectorAll(".nav__link")
      .forEach((n) => n.classList.remove("nav--active"));

    document.getElementById("nav-giving").classList.add("nav--active");
  } else if (
    window.scrollY >= locationSection.offsetTop &&
    window.scrollY < contactSection.offsetTop
  ) {
    nav
      .querySelectorAll(".nav__link")
      .forEach((n) => n.classList.remove("nav--active"));

    document.getElementById("nav-location").classList.add("nav--active");
  } else {
    nav
      .querySelectorAll(".nav__link")
      .forEach((n) => n.classList.remove("nav--active"));

    document.getElementById("nav-contact").classList.add("nav--active");
  }
});

window.addEventListener("scroll", function (e) {
  const contactHeight = contact.offsetTop;

  if (window.scrollY >= 0.85 * contactHeight) {
    contact.classList.remove("contact-unfocus");
    contact.classList.add("contact-focus");
  } else {
    contact.classList.remove("contact-focus");
    contact.classList.add("contact-unfocus");
  }
});

// nav.addEventListener("mouseover", handleHover.bind(0.3));
// nav.addEventListener("mouseout", handleHover.bind(1));

//////////////////////////////////////////////////////////////////////////
// COUNTDOWN FUNCTIONALITY
let countdownDate = new Date("Apr 4, 2021 11:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (timeLeft >= 0) {
    document.getElementById("easter-countdown").innerHTML = `${days}d : ${(
      "0" + hours
    ).slice(-2)}h :  ${("0" + minutes).slice(-2)}m : ${("0" + seconds).slice(
      -2
    )}s`;
  } else {
    document.getElementById("easter-countdown").innerHTML = "0 : 0 : 0 : 0";
  }
}, 1000);
