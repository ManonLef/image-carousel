// consider wrapping in IIFE
const images = document.querySelectorAll("img");
const next = document.querySelector(".right-arrow");
const previous = document.querySelector(".left-arrow");
const inactiveCircle = "⚪";
const activeCircle = "⚫";
let circles;
let currentIndex = 0;
let fiveSecSlider;

function hide(index) {
  images[index].setAttribute("hidden", true);
}

function unhide(index) {
  images[index].removeAttribute("hidden");
}

function setActive(index) {
  images[index].className = "active";
}

function removeActive(index) {
  images[index].classname = "";
}

function setActiveCircle(index) {
  circles[index].textContent = activeCircle;
}

function removeActiveCircle(index) {
  circles[index].textContent = inactiveCircle;
}

function setCurrentIndex(index) {
  return (currentIndex = index);
}

function getCurrentIndex() {
  return currentIndex;
}

function changeImage(newImgIndex) {
  clearTimeout(fiveSecSlider)
  hide(currentIndex);
  removeActive(currentIndex);
  removeActiveCircle(currentIndex);
  setNewIndex(newImgIndex);
  unhide(currentIndex);
  setActive(currentIndex);
  setActiveCircle(currentIndex);
  autoChangeImage()
}

function setNewIndex(newImgIndex) {
  if (newImgIndex === "fwd") {
    if (currentIndex < images.length - 1) {
      return setCurrentIndex(++currentIndex);
    }
  } else if (newImgIndex === "back") {
    if (currentIndex > 0) {
      return setCurrentIndex(--currentIndex);
    }
  } else {
    return setCurrentIndex(parseFloat(newImgIndex));
  }
}

function autoChangeImage() {
  fiveSecSlider = setTimeout(() => {
    if (currentIndex < images.length - 1) {
      changeImage("fwd")
    } else {
      changeImage(0)
    }
  }, 5000);
}

function addCircleSelectors() {
  const circleContainer = document.querySelector(".circles");
  for (let i = 0; i < images.length; i++) {
    const newCircle = document.createElement("div");
    newCircle.setAttribute("data-index", i);
    newCircle.className = "circle";
    newCircle.textContent = inactiveCircle;
    circleContainer.appendChild(newCircle);

    newCircle.addEventListener("click", () => {
      changeImage(newCircle.getAttribute("data-index"));
    });
  }
  circles = document.querySelectorAll(".circle");
  return setActiveCircle(currentIndex);
}

(function startUp() {
  addCircleSelectors();
  next.addEventListener("click", () => {
    changeImage("fwd");
  });
  previous.addEventListener("click", () => {
    changeImage("back");
  });
})();

autoChangeImage()
