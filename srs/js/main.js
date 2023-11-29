let sliderInner =
    document.querySelector(".slider");

let imagens =
    sliderInner.querySelectorAll("img")

let siguiente = 1;
setInterval(function () {
    let percentage = siguiente * -100;
    sliderInner.style.transform =
        "translateX(" + percentage + "%)";
    siguiente ++;
    if (siguiente > imagens.length - 1) {
        siguiente = 0;
    }
}, 5000);

// menu de hamburguesas
// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".barra" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);
