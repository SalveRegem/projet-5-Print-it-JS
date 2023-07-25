let slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentSlide = 0;

  function showSlide(i) {
    let slide = slides[i];
    let slider = document.querySelector('.banner-img');
    let img = document.querySelector('.banner-img');
    let tagLine = document.querySelector('#banner p');
    let dots = document.querySelectorAll('.dot');

    slider.innerHTML = `<img src="./assets/images/slideshow/${slide.image}" alt="Slide">`;
    img.src = `./assets/images/slideshow/${slide.image}`;
    tagLine.innerHTML = slide.tagLine;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('dot_selected', idx === i);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide); 
