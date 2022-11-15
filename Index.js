

/** SIDEBAR MENU */

const sideBtn = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar-menu');
const dimmer = document.querySelector('.dimmer')


sideBtn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
});

dimmer.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
});


$(document).ready(function()
{
    $('.sidebar').first().find('.item').each(function() {
        $(this).find('span').click(function() {
            sidebar.classList.toggle("-translate-x-full");
        });
    });
});




/** HOME CAROUSEL */


var bannerStatus = 1;
var bannerTimer = 5000;

window.onload = function() {
    bannerLoop();
}

var startBannerLoop = setInterval(function() {
    bannerLoop();
}, bannerTimer);

function bannerLoop() {
    if(bannerStatus === 1) {
        document.getElementById("promo").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("home").style.right = "0px";
            document.getElementById("home").style.zIndex = "1000";

            document.getElementById("promo").style.right = "-100%";
            document.getElementById("promo").style.zIndex = "1500";

            document.getElementById("bestseller").style.right = "100%";
            document.getElementById("bestseller").style.zIndex = "500"; 
        }, 500);

        setTimeout(function() {
        document.getElementById("promo").style.opacity = "1";
        }, 1000);
        bannerStatus = 2;
 
    }


    else if(bannerStatus === 2) {
        document.getElementById("bestseller").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("promo").style.right = "0px";
            document.getElementById("promo").style.zIndex = "1000";

            document.getElementById("bestseller").style.right = "-100%";
            document.getElementById("bestseller").style.zIndex = "1500";

            document.getElementById("home").style.right = "100%";
            document.getElementById("home").style.zIndex = "500"; 
        }, 500);

        setTimeout(function() {
        document.getElementById("bestseller").style.opacity = "1";
        }, 1000);
        bannerStatus = 3;
 
    }


    else if(bannerStatus === 3) {
        document.getElementById("home").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("bestseller").style.right = "0px";
            document.getElementById("bestseller").style.zIndex = "1000";

            document.getElementById("home").style.right = "-100%";
            document.getElementById("home").style.zIndex = "1500";

            document.getElementById("promo").style.right = "100%";
            document.getElementById("promo").style.zIndex = "500"; 
        }, 500);

        setTimeout(function() {
            document.getElementById("home").style.opacity = "1";
        }, 1000);
        bannerStatus = 1;
    }

};


/** TESTIMONIALS */

$('#slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

