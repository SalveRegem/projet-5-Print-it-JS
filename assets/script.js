let slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
let currentSlide = 0;

function showSlide(i) {
  let slide = slides[i];
  let img = document.querySelector(".banner-img");
  let tagLine = document.querySelector("#banner p");
  let dots = document.querySelectorAll(".dot");

  img.src = `./assets/images/slideshow/${slide.image}`;
  tagLine.innerHTML = slide.tagLine;

  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === i);
  });
}
const previousButton = document.getElementById("previous-slide");
previousButton.addEventListener("click" , previousSlide)
const nextButton = document.getElementById("next-slide");
nextButton.addEventListener("click", nextSlide)


function nextSlide() {
  // Exemple modulo :  : 2 - (0 * 4 ) = 2  2 % 4 = 2
  // Exemple modulo : 3 -(0 x 4) = 3
  // Exeple modulo :  4 - (1 x 4) = 0 ; 4 % 4 = 0
  // Exemple modulo : 5 - (1 x 4) = 0 ; 5 % 4 = 1
  currentSlide = currentSlide + 1;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  console.log("nextslide", currentSlide);
}

function previousSlide() {
  currentSlide = currentSlide - 1;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
  console.log("previousSlide", currentSlide);
}

showSlide(currentSlide);
