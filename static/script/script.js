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

contactForm.addEventListener('submit',(e)=>{
e.preventDefault();


let formData={
    email: email.value,
    name:name.value,
    message:message.value
}
console.log(formData);

let xhr = XMLHttpRequest();
xhr.open('POST','/');
xhr.setRequestHeader('content-type','application/json');
xhr.onload=function(){
    console.log(xhr.responseText);
    if (xhr.responseText=='success') {
        alert('email sent');
        email.value='';
        name.value='';
        message.value='';

    }else{
        alert('Something went wrong ')
    }
}
})