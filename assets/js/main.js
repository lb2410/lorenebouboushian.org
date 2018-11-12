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

var header = document.querySelector('header')
if(header){
  header.classList.add('fadeToBlackBg');
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
      // setTimeout(function(){keepItMovin.classList.remove('fadeInBorder'); keepItMovin.classList.add('blackHotpink');}, 6000);
    }

  }, 6000);

  setTimeout(function(){
    subHeading.classList.remove('fadeToHotpinkNeon');
    subHeading.classList.add('fadeToTrans');
    if(anim){
      anim.play();
      anim.reverse();
    }
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
