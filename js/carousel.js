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

const moveToSlide = (track, currentSlide, targetID) => {
  const targetSlide = track.querySelector(`#slide-${targetID}`);

  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDotsNav = (dotsNav, currentDot, targetDot) => {
  // update current-slide dot
  dotsNav.querySelector(`#dot-${currentDot}`).classList.remove("current-slide");
  dotsNav.querySelector(`#dot-${targetDot}`).classList.add("current-slide");
};

// reset interval for automatic carousel
const resetTimer = () => {
  clearInterval(timer);
  timer = automateCarousel();
};

// when I click left, move slides to the left
prevButton.addEventListener("click", (e) => {
  resetTimer();

  const currentSlide = track.querySelector(".current-slide");
  const currentID = parseInt(currentSlide.id.substring(6));
  let prevID;

  if (currentID === 0) {
    prevID = track.childElementCount - 1;
  } else prevID = currentID - 1;

  // update dot
  updateDotsNav(dotsNav, currentID, prevID);
  moveToSlide(track, currentSlide, prevID);
});

// when I click right, move slides to the right
nextButton.addEventListener("click", (e) => {
  resetTimer();

  const currentSlide = track.querySelector(".current-slide");
  const currentID = parseInt(currentSlide.id.substring(6));
  const nextID = (currentID + 1) % track.childElementCount;

  // update dot
  updateDotsNav(dotsNav, currentID, nextID);
  moveToSlide(track, currentSlide, nextID);
});

// when I click the nav indicators, move to that slide
dotsNav.addEventListener("click", (e) => {
  const clicked = e.target.closest(".carousel__indicator");
  if (!clicked) {
    return;
  }

  resetTimer();

  const currentSlide = track.querySelector(".current-slide");
  const currentID = parseInt(currentSlide.id.substring(6));
  const targetID = parseInt(clicked.id.substring(4));
  // console.log(clicked, currentSlide);

  moveToSlide(track, currentSlide, targetID);
  updateDotsNav(dotsNav, currentID, targetID);
});

// automate carousel to cycle through slides
const automateCarousel = () => {
  return window.setInterval(goToNextSlide, 30000);
};

const goToNextSlide = () => {
  const currentSlide = track.querySelector(".current-slide");
  const currentID = parseInt(currentSlide.id.substring(6));
  const nextID = (currentID + 1) % track.childElementCount;

  // update dot
  updateDotsNav(dotsNav, currentID, nextID);
  moveToSlide(track, currentSlide, nextID);
};
let timer = automateCarousel();
