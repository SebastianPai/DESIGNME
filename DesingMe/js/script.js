let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let uauario = 0;

function next(){
    slides[uauario].classList.remove('active');
    uauario = (uauario + 1) % slides.length;
    slides[uauario].classList.add('active');
}

function prev(){
    slides[uauario].classList.remove('active');
    uauario = (uauario - 1 + slides.length) % slides.length;
    slides[uauario].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});