//снятие фокуса при нажатии на Х окне поиска
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button-x").addEventListener("click", function () {
    const focusedElement = document.activeElement;
    focusedElement.blur();
    });
});

// прокрутка карусели

document.addEventListener("DOMContentLoaded", function () {
  // Функция для инициализации карусели
  function initializeCarousel(contentId) {
    const prevButton = document.querySelector(`#${contentId} .carousel__arrow--prev`);
    const nextButton = document.querySelector(`#${contentId} .carousel__arrow--next`);
    const cardsContainer = document.querySelector(`#${contentId} .carousel__cards`);

    // Обработчик клика на кнопку "Предыдущий слайд"
    prevButton.addEventListener("click", () => {
      cardsContainer.scrollLeft -= cardsContainer.clientWidth; // Прокрутка влево
    });

    // Обработчик клика на кнопку "Следующий слайд"
    nextButton.addEventListener("click", () => {
      cardsContainer.scrollLeft += cardsContainer.clientWidth; // Прокрутка вправо
    });
  }

  // Инициализация каруселей для content-3, content-4 и content-5
  initializeCarousel("content-3");
  initializeCarousel("content-4");
  initializeCarousel("content-5");
});



//  plus/minus кнопка
document.addEventListener("DOMContentLoaded", function () {
    const decrementButton = document.querySelector(".quantity-control__decrement");
    const incrementButton = document.querySelector(".quantity-control__increment");
    const inputElement = document.querySelector(".quantity-control__input");

    decrementButton.addEventListener("click", () => {
    let currentValue = parseInt(inputElement.value);
    if (currentValue > 1) {
        inputElement.value = currentValue - 1;
    }
    });

    incrementButton.addEventListener("click", () => {
    let currentValue = parseInt(inputElement.value);
    inputElement.value = currentValue + 1;
    });
});


// кнопка ВВЕРХ

document.addEventListener("DOMContentLoaded", function () {
  const scrollTopButton = document.getElementById("scrollTopButton");

  // Показать кнопку, когда пользователь прокручивает вниз
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 1200) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  });

  // Прокрутить страницу в начало при клике на кнопку
  scrollTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Плавная анимация
    });
  });
});


//плавное появление 

document.addEventListener("scroll", function() {
  const elementsFadeIn = document.querySelectorAll(".fade-in");
  const elementsFadeInR = document.querySelectorAll(".fade-in-r");
  const elementsFadeInL = document.querySelectorAll(".fade-in-l");
  
  function handleScrollAnimation(elements, className) {
      elements.forEach(function(element) {
          if (element.getBoundingClientRect().top < window.innerHeight) {
              element.classList.add(className);
          }
      });
  }
  
  handleScrollAnimation(elementsFadeIn, "show");
  handleScrollAnimation(elementsFadeInR, "show-x");
  handleScrollAnimation(elementsFadeInL, "show-x");
});








