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

var carouselInterval;
var carouselNav;

var setCarouselInterval = function() {
  // automate carousel image changes
  carouselInterval = setInterval(function(){
    carouselNav('RIGHT');
  }, 6660);   
}

var initCarousel = function() {
  var carousel_index = 0;
  var images = document.querySelectorAll('.imgWrapper');

  carouselNav = function(direction) {
    clearInterval(carouselInterval);
    setCarouselInterval();
    if(direction === 'LEFT'){
      carousel_index -= 1;
      if(carousel_index <= -1){
        carousel_index = images.length - 1;
      }
    }else if(direction === 'RIGHT'){
      carousel_index += 1;
      if(carousel_index >= images.length){
        carousel_index = 0
      }
    }
    images[carousel_index].scrollIntoView({ behavior: 'smooth'});
  }

  window.onkeyup = function(e) {
    if(e.key == 'ArrowLeft') {
      carouselNav('LEFT');
    } else if( e.key == 'ArrowRight') {
      carouselNav('RIGHT');
    }
  }

  var hammertime = new Hammer(document.querySelector('#carousel'));
  hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
  hammertime.on('swipeleft', function(){carouselNav('RIGHT')});
  hammertime.on('swiperight', function(){carouselNav('LEFT')});

  setTimeout(function(){
    carouselNav('RIGHT');
  }, 4000);
}

var header = document.querySelector('header')
if(header){
  header.classList.add('fadeToBlackBg');
  document.querySelectorAll('.imgWrapper').forEach(function(elem){elem.classList.add('fadeToBlackBg')});
}
var subHeading = document.getElementById('subHeading');
if(subHeading){
  setTimeout(function(){
    subHeading.classList.remove('invisible');
    subHeading.classList.add('fadeToHotpinkNeon');
    subHeading.classList.add('neon');

    var keepItMovin = document.getElementById('keepItMovin');
    if(keepItMovin){
      keepItMovin.classList.remove('hidden');
      keepItMovin.classList.add('fadeToHotpinkColor');
      setTimeout(function(){keepItMovin.classList.add('fadeToBlackBg');}, 6000);
    }

  }, 6000);
  setTimeout(function(){
    subHeading.classList.remove('fadeToHotpinkNeon');
    subHeading.classList.add('fadeToTrans');
    if(anim){
      anim.play();
      anim.reverse();
    }
    setTimeout(function(){
      initCarousel();
    }, 1000);
  }, 12000);
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
