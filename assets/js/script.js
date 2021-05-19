//body to fade in//
var body = document.querySelector('body');

 function fade() {
    setTimeout(() => {
        body.classList.toggle('fade-out'); 
    }, 1000);
}

body.addEventListener('load', fade()); 

//keep footer at bottom of viewport - code taken https://www.youtube.com/watch?v=Sau3hn7zEUY//
$(document).ready(function() {
    let bodyHeight = $(document).outerHeight()
    let footerHeight = $('#footer').outerHeight()
    
    let bodyWrapperHeight = bodyHeight - footerHeight
    $('#body-wrapper').css('height',`${bodyWrapperHeight}`)
    })
    


