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
        let bodyHeight = $(document).outerHeight();
        let footerHeight = $('#footer').outerHeight();
    
        let bodyWrapperHeight = bodyHeight - footerHeight;
        $('#body-wrapper').css('height',`${bodyWrapperHeight}`);
        })

    //reset form after submission
    function submitForm() {
        $("#contact-form").submit();
        $('input[type="name"]').val('');
        $('input[type="email"]').val('');
        $('input[type="text"], textarea').val('');
        } 



    // show and hide the description divs for each page
$(document).ready(function(){
    $("#hide").click(function(){
        $(".description-div").hide();
    });
    $("#show").click(function(){
        $(".description-div").show();
    });
      });
  