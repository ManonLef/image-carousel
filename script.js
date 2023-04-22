const images = document.querySelectorAll("img")
const next = document.querySelector(".right-arrow")
const previous = document.querySelector(".left-arrow")

function hide(index) {
  images[index].setAttribute("hidden", true)
}

function unhide(index) {
  images[index].removeAttribute("hidden")
}