(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict


var headerContainer = $('.header-container');
var topPanel = headerContainer.find('#top-panel');
var searchHolder = headerContainer.find('.search-holder');
var searchForm = headerContainer.find('#search-form');
var openToggle = headerContainer.find('#form-open');
var closeToggle = searchForm.find('#form-close');

function calculateAnimationProps () {
  var vpWidth = $(window).outerWidth(true);
  var width = 0;
  
  if (vpWidth < 1000) {
    width = headerContainer.outerWidth(true) - 40; // Minus container side padding
  } else {
    width = topPanel.outerWidth(true);
  }
  
  var right = width - openToggle.outerWidth(true);
  
  return {
    formWidth: width,
    formRight: right,
    toggleRight: right / 2
  };
}


$( document ).ready(function() {
  $('[data-toggle=search-form]').click(function() {
      $('.search-form-wrapper').toggleClass('open');
      $('.search-form-wrapper .search').focus();
      $('html').toggleClass('search-form-open');
    });
    $('[data-toggle=search-form-close]').click(function() {
      $('.search-form-wrapper').removeClass('open');
      $('html').removeClass('search-form-open');
    });
  $('.search-form-wrapper .search').keypress(function( event ) {
    if($(this).val() == "Search") $(this).val("");
  });
  
  
  });
//1. élément(string)
//2. options(objet)
  ScrollReveal().reveal('.card-deck',{
    duration:1300, 
    origin: 'bottom', 
    distance: '10px',
    scale: 0.2,
    opacity: 0,
    delay: 400,
    reset:true,
    mobile:false,
    useDelay:'always',
    viewFactor:0.5,
  
  });
