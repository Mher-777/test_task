const slider = document.querySelector('.js-slider');
const slides = document.querySelectorAll('.js-slide');
const prevButton = document.querySelector('.js-prev');
const nextButton = document.querySelector('.js-next');

let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});


document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.header__hamburger');
    const menuContent = document.querySelector('.menu-mobile');

    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('open');
        if (menuContent.classList.contains('show')) {
            menuContent.classList.remove('show');
            setTimeout(() => {
                menuContent.style.display = 'none';
            }, 300); // Длительность анимации соответствует transition в CSS
        } else {
            menuContent.style.display = 'block';
            setTimeout(() => {
                menuContent.classList.add('show');
            }, 0); // Немедленное добавление класса для анимации
        }
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.menu__button')) {
            if (menuContent.classList.contains('show')) {
                menuButton.classList.remove('open');
                menuContent.classList.remove('show');
                setTimeout(() => {
                    menuContent.style.display = 'none';
                }, 300); // Длительность анимации соответствует transition в CSS
            }
        }
    });
});