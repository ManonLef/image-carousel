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
  return (currentIndex = index);
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
    
    newCircle.addEventListener("click", () => {
      changeImage(newCircle.getAttribute("data-index"))
    })
  }
  return (circles = document.querySelectorAll(".circle"));
})();

setActiveCircle(currentIndex);

function changeImage(newImgIndex) {
  // remove active status and visuals for current
  hide(currentIndex);
  removeActive(currentIndex);
  removeActiveCircle(currentIndex);
  // set new current
  setNewIndex(newImgIndex);
  // add active status and visuals for new image
  unhide(currentIndex);
  setActive(currentIndex);
  setActiveCircle(currentIndex);
}

function setNewIndex(newImgIndex) {
  if (newImgIndex === "fwd") {
    // conditional for last image
    if (currentIndex < images.length - 1) {
      return setCurrentIndex(++currentIndex);
    }
  } else if (newImgIndex === "back") {
    // conditional for 1st image
    if (currentIndex > 0) {
      return setCurrentIndex(--currentIndex);
    }
  } else {
    return setCurrentIndex(parseFloat(newImgIndex));
  }
}

next.addEventListener("click", () => {
  changeImage("fwd");
});

previous.addEventListener("click", () => {
  changeImage("back");
});
