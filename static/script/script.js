console.log("Hello world");
const menuBtn = document.querySelector('#menu-bar');
const navContainer = document.querySelector('.nav-container');
const darkBtn = document.querySelector('#dark-toggle img');
const contactForm=document.querySelector('#contact-form');
const name = document.querySelector('#form-name');
const email= document.querySelector('#email');
const message= document.querySelector('#msg')
//Navbar mobile view toggle

menuBtn.addEventListener('click',(e)=>{
navContainer.classList.toggle('on');
});

document.querySelector('.about').addEventListener('scroll',()=>{
    console.log('scrolled');
});
