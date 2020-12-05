/* Меню */

var hamburger = document.querySelector(".js-hamburger");
var navigation = document.querySelector(".js-navigation");
var header = document.querySelector(".js-header");

hamburger.addEventListener("click", function (evt) {
    evt.preventDefault();
    hamburger.classList.toggle("open");
    navigation.classList.toggle("open");
    header.classList.toggle("open");
});
