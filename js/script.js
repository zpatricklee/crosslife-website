"use strict";

// Selectors
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const contact = document.querySelector("#contact");
const contactHeight = contact.offsetTop;
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
  if (window.scrollY >= contactHeight - 0.15 * contact.offsetTop) {
    contact.classList.add("contact-focus");
  } else contact.classList.remove("contact-focus");
});
nav.addEventListener("mouseover", handleHover.bind(0.3));
nav.addEventListener("mouseout", handleHover.bind(1));
