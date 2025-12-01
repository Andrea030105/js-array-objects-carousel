const imgArray = [
    {
        urlImg: "./img/01.webp",
        titolo: "Spider-Man",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
    },
    {
        urlImg: "./img/02.webp",
        titolo: "Ratchet & Clank",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
    },
    {
        urlImg: "./img/03.webp",
        titolo: "Fortnite",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
    },
    {
        urlImg: "./img/04.webp",
        titolo: "Stray",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
    },
    {
        urlImg: "./img/05.webp",
        titolo: "Avengers",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
    },
]

const bigImg = document.querySelector(".big-img");
popolateBigImg();

const thumbnail = document.querySelector(".thumbnail");
popolateThumbnail();

const containerImg = document.getElementsByClassName("container-img");
let itemsActive = 0;
containerImg[itemsActive].classList.add("active")

/* BUTTON */

const btnTop = document.getElementById("btn-top").addEventListener("click", function () {
    if (itemsActive < imgArray.length) {
        containerImg[itemsActive].classList.remove("active");
        itemsActive++;
        if (itemsActive === imgArray.length) {
            itemsActive = 0;
        }
        containerImg[itemsActive].classList.add("active");
    }
})

const btnBottom = document.getElementById("btn-bottom").addEventListener("click", function () {
    if (itemsActive < imgArray.length) {
        containerImg[itemsActive].classList.remove("active");
        if (itemsActive === 0) {
            itemsActive = 5;
        }
        itemsActive--;
        containerImg[itemsActive].classList.add("active");
    }
})

/* DEFINIZIONE FUNIONI */


function popolateBigImg() {
    for (let i = 0; i < imgArray.length; i++) {
        bigImg.innerHTML += `
        <div class="container-img">
        <img src="${imgArray[i].urlImg}">
        <h3>${imgArray[i].titolo}</h3>
        <p>${imgArray[i].desc}</p>
        </div>`
    }
}

function popolateThumbnail() {
    imgArray.forEach(element => {
        thumbnail.innerHTML += `
        <div class="container-img-thumbnail opacity-thumbnail">
        <img src="${element.urlImg}">
        </div>`
    });
}
