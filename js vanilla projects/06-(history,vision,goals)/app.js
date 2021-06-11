arrayInfo1 = [
    {
        id: 1,
        title: "History",
        desc: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
    },
    {
        id: 2,
        title: "Vision",
        desc: "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.",
    },
    {
        id: 3,
        title: "Goals",
        desc: "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.",
    },

]
let text = document.querySelector(".text")
let btn = document.querySelectorAll(".btn")



function displayAll(a) {
    let newArray2 = a.map(item => {
        return `<h3>${item.title}</h3>
                <p>${item.desc}</p>`
    })
    text.innerHTML = newArray2.join("")
}

btn.forEach(a => {
    a.addEventListener("click", f => {
        let id = f.currentTarget.dataset.id
        let filteredArray = arrayInfo1.filter(e => {
            return id == e.id
        })
        displayAll(filteredArray)
    })
})


let btnContainer = document.querySelector(".btn-container")


btnContainer.addEventListener("click", function (e) {
    btn.forEach(function (r) {
        r.classList.remove("active");
    });
    e.target.classList.add("active");
})


