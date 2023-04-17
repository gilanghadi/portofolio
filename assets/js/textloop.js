var typing = new Typed(".name", {
  strings: ["Gilang Hadi"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

gsap.registerPlugin(TextPlugin);
gsap.to('.job', {
  duration: 3,
  text: {
    value: "Web Development / Fullstack Developer"
  },
});
