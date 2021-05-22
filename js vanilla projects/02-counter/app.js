let counter = 0
let btns = document.querySelectorAll(".btn")
let value = document.getElementById("value")

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("increase")) {
      counter++
    } else if (btn.classList.contains("decrease")) {
      counter--
    } else {
      counter = 0
    }

    value.textContent = counter
    if (counter > 0) {
      value.style.color = "green"
    } else if (counter < 0) {
      value.style.color = "red"
    } else {
      value.style.color = "#222"
    }
  })
})