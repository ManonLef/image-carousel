// consider wrapping in IIFE
const images = document.querySelectorAll("img");
const next = document.querySelector(".right-arrow");
const previous = document.querySelector(".left-arrow");
let circles;
let currentIndex = 0;

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
  circles[index].textContent = "⚫";
}

function removeActiveCircle(index) {
  circles[index].textContent = "⚪";
}

function setCurrentIndex(index) {
  return currentIndex = index
}

function getCurrentIndex() {
  return currentIndex;
}

(function addCircleSelectors() {
  const circleContainer = document.querySelector(".circles");
  for (let i = 0; i < images.length; i++) {
    const newCircle = document.createElement("div");
    newCircle.setAttribute("data-index", i);
    newCircle.className = "circle";
    newCircle.textContent = "⚪";
    circleContainer.appendChild(newCircle);
    // add eventlistener
  }
  return (circles = document.querySelectorAll(".circle"));
})()

setActiveCircle(currentIndex);

function changeImage(newImg) {
  // hide this image index
  hide(currentIndex)
  removeActive(currentIndex)
  removeActiveCircle(currentIndex)
  // set nextindex active
  setNewIndex(newImg)
  // show next image index
  unhide(currentIndex)
  setActive(currentIndex)
  setActiveCircle(currentIndex)
  // darken next image index
}

function setNewIndex(newImg) {
  if (newImg === "fwd") {
    // add constraint of max img available
    return setCurrentIndex(++currentIndex)
  } else if (newImg === "back") {
    // add constraint of not below 0
    return setCurrentIndex(--currentIndex)
  } else {
    return setCurrentIndex(parseFloat(newImg))
  }
}

next.addEventListener("click", () => {
  changeImage("fwd")
})

previous.addEventListener("click", () => {
  changeImage("back")
})