//body to fade in//
const body = document.querySelector('body');

const fade = () => {
    setTimeout(() => {
        body.classList.toggle('fade-out'); 
    }, 1000);
}

body.addEventListener('load', fade()); 


