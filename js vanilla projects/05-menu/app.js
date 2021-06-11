const menu = [
    {
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "img/item-1.jpeg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "img/item-2.jpeg",
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "img/item-3.jpeg",
        desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "img/item-4.jpeg",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
    },
    {
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "img/item-5.jpeg",
        desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },
    {
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "img/item-6.jpeg",
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "img/item-7.jpeg",
        desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },
    {
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "img/item-8.jpeg",
        desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "img/item-9.jpeg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
    {
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "img/item-10.jpeg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
];

let filterBtns = document.querySelectorAll(".filter-btn")
let menuSection = document.querySelector(".menu-section")

displayMenu(menu)

function displayMenu(array1) {
    let arraySlippedToHtml = array1.map(item => {
        return `<div class="menu-item">
                    <div class="img">
                        <img src="${item.img}">
                    </div>
                    <div class="item-desc">
                        <div class="header">
                            <h3>${item.title}</h3>
                            <span>${item.price}</span>
                        </div>
                        <p>${item.desc}</p>
                    </div>
                </div>`
    })
    menuSection.innerHTML = arraySlippedToHtml.join("")
}

filterBtns.forEach(e => {
    e.addEventListener("click", a => {
        let category = a.currentTarget.dataset.id
        let array2 = menu.filter(m => {
            return category == m.category
        })
        if (category == "all") {
            displayMenu(menu)
        }
        else {
            displayMenu(array2)
        }
    })
})