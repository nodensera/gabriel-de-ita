var t1 = new TimelineMax();
t1.to('.overlay-bw', 0.7, {
  left: '-100%',
  ease: Expo.easeInOut,
});
t1.to('.overlay-bw-top', 0.7, {
  left: '-100%',
  delay: -0.5,
  ease: Expo.easeInOut,
});
t1.to('.overlay-bw-f', 0.7, {
  left: '-100%',
  delay: -0.4,
  ease: Expo.easeInOut,
});