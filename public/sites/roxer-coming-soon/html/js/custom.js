


jQuery(function($) {
  "use strict";
/* ==============================================
   Countdown
=============================================== */
  // Create a countdown instance. Change the launchDay according to your needs.
  // The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
  // Thus the launchDay below denotes 7 May, 2014.
  var launchDay = new Date(2015, 11-1, 14);
  $('#timer').countdown({
  until: launchDay
  });


/* ==============================================
  Bx Slider
=============================================== */

  $('.bxslider').bxSlider({
      auto: true,
      pager:false,
      mode: 'fade',
      speed: 1500,
      pause:5000
      });

    /* ----------------------------------------------------------- */
   /*  Animation
   /* ----------------------------------------------------------- */
        new WOW().init();

         /* ==============================================
    Bactstretch js
=============================================== */
      $.backstretch([
          "images/bx-slider/bg2.jpg",
          "images/bx-slider/bg3.jpg",
          "images/bx-slider/bg7.jpg"
        ], {
            fade: 750,
            duration: 4000
        });  


   /* ==============================================
      Menu toggle
    =============================================== */ 
    
      $('a.page-scroll').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 40
              }, 900);
              return false;
            }
          }
        });

      // textslider
  $("#textslider").superslides({
    play: 6000, // 6 seconds between each slide
    animation: "fade",
    animation_speed: "slow",
    pagination: false,
    usekeyboard: false
  });

});