/*------------style switcher--------------*/
const styleswitcherToggler = document.querySelector(".style-switcher-toggler");
styleswitcherToggler.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
/*====================hide style switcher==============*/
window.addEventListener("scroll",() =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
      document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*====================theme colors==================*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", true);
    }
  });
}
/*=======================them light and dark mode=================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector(i).classList.toggle("fa-sun");
    dayNight.querySelector(i).classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

var typed = new Typed(".typing", {
    strings: ["web developer", "data scientist", "mobile developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });