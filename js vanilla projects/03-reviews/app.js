let reviews = [
  {
    name: "susan smith",
    job: "web developer",
    img: "img/person-1.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    name: "anna johnson",
    job: "web designer",
    img: "img/person-2.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    name: "peter jones",
    job: "intern",
    img: "img/person-3.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    name: "bill anderson",
    job: "the boss",
    img: "img/person-4.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
]

let counter = 0

let image = document.getElementById("person-img")
let author = document.getElementById("author")
let job = document.getElementById("job")
let info = document.getElementById("info")

let prevBtn = document.querySelector(".prev-btn")
let nextBtn = document.querySelector(".next-btn")
let randomBtn = document.querySelector(".random-btn")

function showPerson(person) {
  let item = reviews[person]
  image.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

nextBtn.addEventListener("click", function () {
  counter++
  if (counter > reviews.length - 1) {
    counter = 0
  }
  showPerson(counter)
})

prevBtn.addEventListener("click", function () {
  counter--
  if (counter < 0) {
    counter = reviews.length - 1
  }
  showPerson(counter)
})

randomBtn.addEventListener("click", function () {

  counter = Math.floor(Math.random() * reviews.length)
  showPerson(counter)

})

