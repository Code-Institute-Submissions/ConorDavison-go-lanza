$('.slider').each(function() { //For every slider    
  var $this = $(this); // Ger current slider 
  var $group = $this.find('.slide-group'); // Get the slide-group
  var $slides = $this.find('.slide'); 
  var buttonArray = [];
  var currentIndex = 0;
  var timeout; // Used to store timer

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance(); // When slide moves call advance()

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    buttonArray[currentIndex].removeClass('active');
    buttonArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    }
    else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css({left: slideLeft, display: 'block'});
    $group.animate({left:animateLeft} , function(){
      $slides.eq(currentIndex).css ({display: 'none'});
      $slides.eq(newIndex).css({left: 0});
      $group.css({left: 0});
      currentIndex = newIndex
    });
    }
  
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function(){
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move (0);
        }
    }, 4000)
    
  }

  $.each($slides,function(index) {
    //Create Button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex){
      $button.addClass('active');
    }
    $button.on('click', function(){
      move(index);
    }).appendTo($this.find('.slide-btns'));
    buttonArray.push($button);
  });

  advance();

})



