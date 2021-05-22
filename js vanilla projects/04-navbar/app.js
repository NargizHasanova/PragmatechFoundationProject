let btn = document.querySelector(".nav-toggle")
let ulTag = document.querySelector(".links")

btn.addEventListener("click", function () {
  ulTag.classList.toggle("show-links")
})