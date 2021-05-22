var btn = document.getElementById("btn")
var colors = ["green", "red", "yellow", "aqua", "crimson"];
var color = document.querySelector(".color")

btn.addEventListener("click", function () {
  var randomNumber = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length) // it will return 0,1,2,3 or 4
}







