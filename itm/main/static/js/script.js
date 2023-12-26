const slider = document.querySelector('.image-container');
const sliderImages = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');

const sliderBtnPrev = document.querySelector('.slider__btn-prev');
const sliderBtnNext = document.querySelector('.slider__btn-next');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;
let rollCount = sliderImages.length - 5;

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);



function nextSlide() {
    sliderCount++;
    console.log(sliderCount);

    if (sliderCount >= rollCount) {
        sliderCount = 0;
    }

    rollSlider();
}

function prevSlide() {
    sliderCount--;
    console.log(sliderCount);

    if (sliderCount >= sliderImages.length - 5) {
        sliderCount = 0;
    }

    rollSlider();
}

if (window.matchMedia(`(max-width: 1200px)`).matches) {
    function rollSlider() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px`;
    }
}

if (window.matchMedia(`(max-width: 998px)`).matches) {
    function rollSlider() {
        sliderLine.style.transform = `translateX(${-sliderCount*1.25 * sliderWidth}px`;
    }
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px`;
}

setInterval(() => {
    nextSlide()
}, 3000);
