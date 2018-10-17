// var darkToLight = [];
// for(var i=0;i<11;i++){
//   darkToLight.push('hsl(0,0%,'+ i*10 +'%)');
// }
// var lightToDark = [];
// for(var i=0;i<10;i++){
//   lightToDark.push('hsl(0,0%,'+ i*10 +'%)');
// }
anime({
  targets: '#headerLineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) {
    return i * 250
  },
  direction: 'alternate',
  loop: false,
});

var header = document.querySelector('header')
if(header){
  header.classList.add('fadeToBlackBg');
  document.getElementById('headerLineDrawing').classList.add('fadeToHotpinkColor');
}

setTimeout(function(){
  var subHeading = document.getElementById('subHeading');
  if(subHeading){
    subHeading.classList.remove('invisible');
    subHeading.classList.add('fadeToHotpinkNeon');
    subHeading.classList.add('neon');
  }

  var keepItMovin = document.getElementById('keepItMovin');
  if(keepItMovin){
    keepItMovin.classList.remove('hidden');
    keepItMovin.classList.add('fadeInBorder');
    setTimeout(function(){keepItMovin.classList.remove('fadeInBorder'); keepItMovin.classList.add('blackHotpink');}, 6000);
  }

}, 6000);



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
