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
previousButton.addEventListener("click" , changeSlide(-1))
const nextButton = document.getElementById("next-slide");
nextButton.addEventListener("click", changeSlide(1))


function changeSlide(direction) {
  currentSlide = currentSlide + direction
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    const lastSlide = slides.length - 1
    currentSlide = lastSlide
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);
