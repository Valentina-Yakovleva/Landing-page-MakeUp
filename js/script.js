const header = document.querySelector("header");

window.addEventListener("scroll", function() {
   header.classList.toggle ("sticky", window.scrollY > 0);
});

let prices = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

prices.onclick = () => {
   prices.classList.toggle('bx-x');
   navbar.classList.toggle('open');
};

window.onscroll = () => {
   prices.classList.remove('bx-x');
   navbar.classList.remove('open');
};