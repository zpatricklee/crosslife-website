"use strict";

// Selectors
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const contact = document.querySelector("#contact");

const allSections = document.querySelectorAll(".section");

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

// Event listeners
window.addEventListener("scroll", function (e) {
  const contactHeight = contact.offsetTop;

  if (window.scrollY >= 0.85 * contactHeight) {
    contact.classList.add("contact-focus");
  } else contact.classList.remove("contact-focus");
});
nav.addEventListener("mouseover", handleHover.bind(0.3));
nav.addEventListener("mouseout", handleHover.bind(1));

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
