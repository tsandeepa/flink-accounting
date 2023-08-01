gsap.from(".banner_desc", {
  opacity: 0,
  y: 100,
  duration: 1
});

let scBtn = document.querySelector('.sc-top')

document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY > 1500) {
    scBtn.classList.add('d-flex')
  } else {
    scBtn.classList.remove('d-flex')
  }
});