//body to fade in//
var body = document.querySelector('body');

 function fade() {
    setTimeout(() => {
        body.classList.toggle('fade-out'); 
    }, 1000);
}

body.addEventListener('load', fade()); 


