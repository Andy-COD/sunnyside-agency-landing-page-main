AOS.init();
const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", (() => {
    if(mobileNav.classList.contains("hide")) {
        mobileNav.classList.remove("hide");
        mobileNav.style.transform = "scaleY(1)";
    }else {
        mobileNav.classList.add("hide");
    }
}))

document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });