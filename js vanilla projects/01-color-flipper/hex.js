var hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
var color = document.querySelector(".color")
var btn = document.getElementById("btn")

btn.addEventListener("click", function () {
  var hex = "#"
  for (let i = 0; i < 6; i++) {
    hex = hex + hexColors[getRandomNumber()]
  }
  color.textContent = hex
  document.body.style.backgroundColor = hex
})

function getRandomNumber() {
  return Math.floor(Math.random() * hexColors.length)
}
