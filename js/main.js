document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button-x").addEventListener("click", function () {
    const focusedElement = document.activeElement;
    focusedElement.blur();
    });
});

