var initMainCarousel = function() {
  var mainCarousel = document.querySelector('.mainCarousel');
  if (mainCarousel) {
    tns({
      container: '.mainCarousel',
      items: 1,
      slideBy: 'page',
      autoplay: true,
      controls: false,
      arrowKeys: true,
      mouseDrag: true,
      autoplayButtonOutput: false,
      nav: false
    });
    mainCarousel.focus();
  }

  var carousel = document.querySelector('.carousel');
  if (carousel) {
    tns({
      container: '.carousel',
      loop: false,
      items: 1,
      slideBy: 'page',
      autoplay: true,
      // controls: false,
      controlsPosition: 'bottom',
      arrowKeys: true,
      mouseDrag: true,
      autoplayButtonOutput: false,
      nav: false,
      center: false,
      autoWidth: true,
      gutter: 50
    });
    carousel.focus();
  }
}

window.addEventListener('DOMContentLoaded', initMainCarousel);

var anim = document.querySelector('#headerLineDrawing .lines path') && anime({
  targets: '#headerLineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  direction: 'alternate',
  loop: false,
  delay: function(el, i) {
    return i * 250
  }
});

// dynamically change the header nav background transparency so carousel images bleed-thru but other content does not.
var header = document.querySelector('header')
if(header){
  var nav = document.querySelector('nav');
  if(nav) {
    nav.style.backgroundColor = 'rgba(0,0,0,0.3)';
    window.addEventListener('scroll', function(){
      if(window.scrollY > window.innerHeight){
        nav.style.backgroundColor = 'black';
      } else {
        nav.style.backgroundColor = 'rgba(0,0,0,0.3)';
      }
    })
  }
}

var subHeading = document.getElementById('subHeading');
if(subHeading){
  setTimeout(function(){
    subHeading.classList.remove('invisible');
    subHeading.classList.add('fadeToHotpinkNeon');
    subHeading.classList.add('neon');
    
  }, 6000);
}

// prevent svg from loading before animation starts. 
var headerLineDrawing = document.getElementById('headerLineDrawing');
if(headerLineDrawing){
  headerLineDrawing.classList.remove('hidden');
}

var navEl = document.querySelector('#lbOutline');
if(navEl){
  function animateEl(duration, delay) {
    anime.remove(navEl);
    anime({
      targets: '#navLineDrawing .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: duration,
      delay: function(el, i) {
        return i * delay
      },
      direction: 'alternate',
      loop: false
    });
  }
  
  function enterEl() { animateEl(250, 50) };
  function leaveEl() { animateEl(1000, 50) };
  
  navEl.addEventListener('mouseenter', enterEl, false);
  navEl.addEventListener('mouseleave', leaveEl, false);
  
  animateEl(2500, 500);
}

document.querySelectorAll("h3.stickyNav").forEach(function(elem){
  elem.style.top = document.getElementsByTagName('nav')[0].clientHeight + 'px';
});
