let navbar = document.querySelector('.navbar');
let bodyscroll = document.querySelector('html,body');
/* start scroll bar */
window.addEventListener('scroll', function () {
    //console.log(bodyscroll.scrollTop);
    if (bodyscroll.scrollTop >= 100) {
        //console.log('done');
        document.querySelector('.scroll_top').style.display = 'inline';
        document.querySelector('.scroll_top').addEventListener('click', function () {
            //window.scrollTo(left , top)
            window.scrollTo(0, 0)
        })
    } else {
        //console.log('sorry');
        document.querySelector('.scroll_top').style.display = 'none';
    }
});
/* end scroll bar */

/* start fixed navbar */
window.addEventListener('scroll', function () {
    //console.log(bodyscroll.scrollTop);
    if (bodyscroll.scrollTop >= 100) {
        document.querySelector('.main_container').classList.add("fixed");
    } else {
        document.querySelector('.main_container').classList.remove("fixed");
    }
});
/* end fixed navbar */

//Active Class
let navlink = document.querySelectorAll('.nav_item .nav_link');
let link;
let removeactive;
for (link = 0; link < navlink.length; link++) {
    navlink[link].addEventListener('click', function () {
        //remove active class
        for (removeactive = 0; removeactive < navlink.length; removeactive++) {
            navlink[removeactive].classList.remove('active');
            navlink[removeactive].style.color = "#50658e";
        }
        //add active class
        this.classList.add('active');
        this.style.color = "#2a81ea";
    });
}
