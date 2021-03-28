const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dotButtons = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, current, target) => {
  const currentSlide = track.querySelector(
    `.carousel__slide[data-slide="${current}"]`
  );
  const targetSlide = track.querySelector(
    `.carousel__slide[data-slide="${target}"]`
  );

  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDotsNav = (dotsNav, currentDot, targetDot) => {
  // update current-slide dot
  dotsNav
    .querySelector(`.carousel__indicator[data-dot="${currentDot}"]`)
    .classList.remove("current-dot");
  dotsNav
    .querySelector(`.carousel__indicator[data-dot="${targetDot}"]`)
    .classList.add("current-dot");
};

// reset interval for automatic carousel
const resetTimer = () => {
  clearInterval(timer);
  timer = automateCarousel();
};

// when I click left, move slides to the left
prevButton.addEventListener("click", (e) => {
  resetTimer();

  const currentSlide = track.querySelector(".current-slide").dataset.slide;
  let prevSlide;

  if (currentSlide === "0") {
    prevSlide = `${track.childElementCount - 1}`;
  } else prevSlide = currentSlide - 1;

  // update dot
  updateDotsNav(dotsNav, currentSlide, prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
});

// when I click right, move slides to the right
nextButton.addEventListener("click", (e) => {
  resetTimer();

  const currentSlide = track.querySelector(".current-slide").dataset.slide;
  const nextSlide = (currentSlide + 1) % track.childElementCount;

  // update dot
  updateDotsNav(dotsNav, currentSlide, nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
});

// when I click the nav indicators, move to that slide
dotsNav.addEventListener("click", (e) => {
  const clicked = e.target.closest(".carousel__indicator");
  if (!clicked) {
    return;
  }

  resetTimer();

  console.log(clicked.dataset.slide);

  const currentSlide = track.querySelector(".current-slide").dataset.slide;
  const targetSlide = clicked.dataset.dot;
  // console.log(clicked, currentSlide);

  moveToSlide(track, currentSlide, targetSlide);
  updateDotsNav(dotsNav, currentSlide, targetSlide);
});

// automate carousel to cycle through slides
const automateCarousel = () => {
  return window.setInterval(goToNextSlide, 40000);
};

const goToNextSlide = () => {
  const currentSlide = track.querySelector(".current-slide").dataset.slide;
  const nextSlide = (currentSlide + 1) % track.childElementCount;

  // update dot
  updateDotsNav(dotsNav, currentSlide, nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
};
let timer = automateCarousel();
