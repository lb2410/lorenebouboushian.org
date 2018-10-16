anime({
  targets: '#headerLineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) {
    return i * 250
  },
  direction: 'alternate',
  loop: true
});

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

var colors = [];
for(var i=10;i>0;i--){
  colors.push('hsl(0,0%,'+ i*10 +'%)');
}

anime({
  targets: '#subHeading div',
  color: colors,
  easing: 'linear',
  direction: 'alternate',
  duration: 6000,
  delay: 3000,
  loop: false,
  complete: function(anim) {
    var keepItMovin = document.getElementById('keepItMovin');
    if(keepItMovin){
      keepItMovin.classList.remove('hidden');
      keepItMovin.classList.add('fadeIn');
      setTimeout(function(){keepItMovin.classList.remove('fadeIn'); keepItMovin.classList.add('blackHotpink');}, 3000);
    }
  }
});

document.querySelectorAll("h3.stickyNav").forEach(function(elem){
  elem.style.top = document.getElementsByTagName('nav')[0].clientHeight + 'px';
});
