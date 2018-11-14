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

var initCarousel = function() {
  var carousel_l = document.querySelector('#carousel #l');
  var carousel_r = document.querySelector('#carousel #r');
  var carousel_index = 0;
  var images = document.querySelectorAll('.imgWrapper');

  carousel_r.classList.remove('hidden');
  document.querySelector('#carousel #r .lines line') && anime({
    targets: '#carousel #r .lines line',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    direction: 'alternate',
    loop: false,
    delay: function(el, i) {
      return i * 250
    }
  });

  setTimeout(function(){
    carousel_l.classList.remove('hidden');
    document.querySelector('#carousel #l .lines line') && anime({
      targets: '#carousel #l .lines line',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      direction: 'alternate',
      loop: false,
      delay: function(el, i) {
        return i * 250
      }
    });
  }, 4000);

  var carouselNav = function(direction) {
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

  carousel_l.addEventListener('click', function(){carouselNav('LEFT')});
  carousel_r.addEventListener('click', function(){carouselNav('RIGHT')});

  var hammertime = new Hammer(document.querySelector('#carousel'));
  hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
  hammertime.on('swipeleft', function(){carouselNav('RIGHT')});
  hammertime.on('swiperight', function(){carouselNav('LEFT')});

  var last_known_scroll_position = 0;
  var ticking = false;
  function onWindowScroll(scroll_pos) {
    // this is kinda dumb :/ 
    if(scroll_pos > window.outerHeight / 6){
      document.querySelectorAll('#carousel #l,#carousel #r').forEach(function(elem){
        elem.style.position = 'absolute';
      });
    }else{
      document.querySelectorAll('#carousel #l,#carousel #r').forEach(function(elem){
        elem.style.position = 'fixed';
      });
    }    
  }
  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        onWindowScroll(last_known_scroll_position);
        ticking = false;
      });
      ticking = true;
    }
  });
}

var header = document.querySelector('header')
if(header){
  header.classList.add('fadeToBlackBg');
  document.querySelectorAll('.imgWrapper').forEach(function(elem){elem.classList.add('fadeToBlackBg')});
  // document.getElementById('headerLineDrawing').classList.add('fadeToHotpinkColor');

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
  initCarousel();
  setTimeout(function(){
    subHeading.classList.remove('fadeToHotpinkNeon');
    subHeading.classList.add('fadeToTrans');
    if(anim){
      anim.play();
      anim.reverse();
    }
    setTimeout(function(){
      // initCarousel();
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
