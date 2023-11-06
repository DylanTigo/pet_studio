const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav a")
links.forEach(link => link.addEventListener("click", toggleMenu))

burgerMenu.addEventListener("click", toggleMenu);
function toggleMenu(e) {
  burgerMenu.classList.toggle("active");
  nav.classList.toggle("active");
  if (burgerMenu.classList[1]) {
    gsap.to("header nav a", { autoAlpha: 1, y: 0, delay: 0.5 });
  } else {
    gsap.to("header nav a", { autoAlpha: 0, y: -35, delay: 0.5 });
  }
}
window.addEventListener("load", handleAparition);

function handleAparition() {
  let timline = gsap.timeline();
  timline
    .to(".hero .descrition h1", { autoAlpha: 1, y: 0, delay: 0.3 })
    .to(".hero .descrition p", { autoAlpha: 1, y: 0 }, "-=.2")
    .to(".hero .descrition button", { autoAlpha: 1, y: 0 }, "-=.2")
    .to(
      ".hero .gallery div",
      { autoAlpha: 1, y: 0, stagger: 0.3, duration: 0.2 },
      "-=.2"
    )
    .to(burgerMenu, { autoAlpha: 1, y: 0 }, "-=.2")
    .to("header .logo", { autoAlpha: 1, y: 0 }, "-=.8");
}

function toTheBottom(element){
    gsap.to(element, {autoAlpha: 1, y: 0, duration: .7, scrollTrigger:{
        trigger: element,
        start: "top 80%",
        end: "80% 20%",
        toggleActions: "play complete resume reset",
    }});
}
const titles = document.querySelectorAll("h2")
titles.forEach(title => toTheBottom(title))

const aboutParagraphs = document.querySelectorAll(".about-container .text-container p")
aboutParagraphs.forEach(paragrah => {
    paragrah.addEventListener("mouseover", slideImage)
})

function slideImage(e){
    const imgList = document.querySelectorAll(".about-container .img-container img")
    imgList.forEach(img => {
        img.classList.remove("active")
        if(e.target.dataset.text === img.dataset.img){
            img.classList.add("active")
        }
    });
    console.log(e.target.dataset.text);
}
toTheBottom(".about-container .img-container")

