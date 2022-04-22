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
  asNavFor: '.image-slider',
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
$('.p-1').hover(function () {
  $('.cursor').css({
    'background-image':
      'url(https://images.unsplash.com/photo-1477704080907-b04e4e2d3282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
  });
});
$('.p-2').hover(function () {
  $('.cursor').css({
    'background-image':
      'url(https://images.unsplash.com/photo-1553979199-b0b04376d319?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)',
  });
});
$('.p-3').hover(function () {
  $('.cursor').css({
    'background-image':
      'url(https://images.unsplash.com/photo-1557263432-f37dd16f6d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)',
  });
});
$('.p-4').hover(function () {
  $('.cursor').css({
    'background-image':
      'url(https://images.unsplash.com/photo-1512830414785-9928e23475dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
  });
});
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




//project
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