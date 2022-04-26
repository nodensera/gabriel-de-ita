var t11 = new TimelineMax();
t11.to('.overlay-bw', 0.7, {
  left: '-100%',
  ease: Expo.easeInOut,
});
t11.to('.overlay-bw-top', 0.7, {
  left: '-100%',
  delay: -0.5,
  ease: Expo.easeInOut,
});
t11.to('.overlay-bw-f', 0.7, {
  left: '-100%',
  delay: -0.4,
  ease: Expo.easeInOut,
});


const menuBtn = document.querySelector('.menu-div');
const exitBtn = document.querySelector('.exit');

let t1 = gsap.timeline({ paused: true });
t1.to('.menu', { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut });
t1.to(
  '.nav',
  {
    opacity: 1,
    marginBottom: 0,
    duration: 1,
    ease: Power2.easeInOut,
    stagger: 0.3,
  },
  '>-0.5'
);

menuBtn.addEventListener('click', () => {
  t1.play().timeScale(1);
});

exitBtn.addEventListener('click', () => {
  t1.timeScale(2.5);
  t1.reverse();
});


// image on hover effect
var $cursor = $('.cursor'),
  $overlay = $('.project-overlay');
function moveCircle(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY,
    },
    delay: 0.03,
  });
}

var flag = false;
$($overlay).mousemove(function () {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on('mousemove', moveCircle);
});
$($overlay).mouseout(function () {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});




