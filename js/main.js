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


//










//  РАБОТАЕТ НО БЕЗ ПЛАВНОЙ ПРОКРУТКИ

// document.addEventListener("DOMContentLoaded", function () {
//     const prevButton = document.querySelector(".carousel__arrow--prev");
//     const nextButton = document.querySelector(".carousel__arrow--next");
//     const cardsContainer = document.querySelector(".carousel__cards");

//     prevButton.addEventListener("click", () => {
//     const lastCard = cardsContainer.lastElementChild;
//     cardsContainer.prepend(lastCard);
//     });

//     nextButton.addEventListener("click", () => {
//     const firstCard = cardsContainer.firstElementChild;
//     cardsContainer.appendChild(firstCard);
//     });
// });








