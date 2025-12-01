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
abilitaClickThumbnail();

const containerImg = document.getElementsByClassName("container-img");
const containerImgThumbnail = document.getElementsByClassName("container-img-thumbnail");
let itemsActive = 0;
containerImg[itemsActive].classList.add("active");
containerImgThumbnail[itemsActive].classList.add("active-img-thumbnail");
containerImgThumbnail[itemsActive].classList.remove("opacity-thumbnail");

/* BUTTON */

const btnTop = document.getElementById("btn-top").addEventListener("click", function () {
    nextImg();
})

const btnBottom = document.getElementById("btn-bottom").addEventListener("click", function () {
    prevImg();
})

let autoPlay;
let reversePlay;
const play = document.getElementById("play").addEventListener("click", function () {
    autoPlay = setInterval(nextImg, 3000);
})

const stop = document.getElementById("stop").addEventListener("click", function () {
    clearInterval(autoPlay);
    clearInterval(reversePlay);
})

const reverse = document.getElementById("reverse").addEventListener("click", function () {
    reversePlay = setInterval(prevImg, 3000)
})

/* DEFINIZIONE FUNIONI */

function nextImg() {
    if (itemsActive < imgArray.length) {
        containerImg[itemsActive].classList.remove("active");
        containerImgThumbnail[itemsActive].classList.remove("active-img-thumbnail");
        containerImgThumbnail[itemsActive].classList.add("opacity-thumbnail");
        itemsActive++;
        if (itemsActive === imgArray.length) {
            itemsActive = 0;
        }
        containerImg[itemsActive].classList.add("active");
        containerImgThumbnail[itemsActive].classList.add("active-img-thumbnail", "opacity-thumbnail");
        containerImgThumbnail[itemsActive].classList.remove("opacity-thumbnail");
    }
}

function prevImg() {
    if (itemsActive < imgArray.length) {
        containerImg[itemsActive].classList.remove("active");
        containerImgThumbnail[itemsActive].classList.remove("active-img-thumbnail");
        containerImgThumbnail[itemsActive].classList.add("opacity-thumbnail");
        if (itemsActive === 0) {
            itemsActive = 5;
        }
        itemsActive--;
        containerImg[itemsActive].classList.add("active");
        containerImgThumbnail[itemsActive].classList.add("active-img-thumbnail", "opacity-thumbnail");
        containerImgThumbnail[itemsActive].classList.remove("opacity-thumbnail");
    }
}

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
    let i = 1;
    imgArray.forEach(element => {
        thumbnail.innerHTML += `
        <div class="container-img-thumbnail opacity-thumbnail">
        <img id="img-${i}" src="${element.urlImg}">
        </div>`
        i++;
    });
}

function abilitaClickThumbnail() {
    const allThumbnails = document.querySelectorAll(".container-img-thumbnail");
    const allBigImages = document.querySelectorAll(".container-img");

    allThumbnails.forEach((thumb, idx) => {
        thumb.addEventListener("click", () => {
            // Rimuovi tutte le classi active dalle immagini grandi e thumbnail
            allBigImages.forEach(img => img.classList.remove("active"));
            allThumbnails.forEach(th => {
                th.classList.remove("active-img-thumbnail");
                th.classList.add("opacity-thumbnail");
            });

            // Attiva la thumbnail cliccata
            thumb.classList.add("active-img-thumbnail");
            thumb.classList.remove("opacity-thumbnail");

            // Attiva l’immagine grande corrispondente
            allBigImages[idx].classList.add("active");

            // Aggiorna l'indice corrente
            itemsActive = idx;
        });
    });
}