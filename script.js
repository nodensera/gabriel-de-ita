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


//slider

var sickPrimary = {
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 1800,
  cssEase: 'cubic-bezier(.84, 0, .08, .99)',
  asNavFor: '.text-slider',
  centerMode: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
};

var sickSecondary = {
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1800,
  cssEase: 'cubic-bezier(.84, 0, .08, .99)',
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
};

$('.image-slider').slick(sickPrimary);
$('.text-slider').slick(sickSecondary);




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


// project
TweenMax.staggerFrom(
  '.block',
  0.8,
  {
    width: '0%',
    ease: Power1.easeIn,
    delay: 0,
  },
  0.04
);




