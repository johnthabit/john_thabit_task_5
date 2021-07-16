const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_link");
const links = document.querySelectorAll(".nav_link li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});