// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library

  var dob = new Date("11/20/1982");  
  //calculate month difference from current date in time  
  var month_diff = Date.now() - dob.getTime();  
    
  //convert the calculated difference in date format  
  var age_dt = new Date(month_diff);   
    
  //extract year from date      
  var year = age_dt.getUTCFullYear();  
    
  //now calculate the age of the user  
  var age = Math.abs(year - 1970);  
    
  //display the calculated age  
  document.getElementById("myAge").innerHTML = age;

});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

let map, infoWindow, center;
function initMap(){

  center = {lat: 44.6659, lng: 20.9335};
  map = new google.maps.Map(document.getElementById("mapa"), {
    center: center,
    zoom: 13
  });

  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  //Uncomment if you want to work.
  /*if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition((position) => {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Here i am :)');
      infoWindow.open(map);
      map.setCenter(pos);

    }, () => {
      handleLocationError(true, infoWindow, map.getCenter());
    });

  } 
  else{
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
    
  }*/

}
  
function handleLocationError(browserHasGeolocation, infoWindow, pos) {

  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);

}

$( document ).ready(function() {

  // Carousel

  $(".carousel").carousel({
      interval: false,
      pause: true
  });

  $( ".carousel .carousel-inner" ).swipe( {
  swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
      this.parent( ).carousel( 'next' );
  },
  swipeRight: function ( ) {
      this.parent( ).carousel( 'prev' );
  },
  threshold: 0,
  tap: function(event, target) {
      window.location = $(this).find('.carousel-item.active a').attr('href');
  },
  excludedElements:"label, button, input, select, textarea, .noSwipe"
  } );

  $('.carousel .carousel-inner').on('dragstart', 'a', function () {
      return false;
  });  

});