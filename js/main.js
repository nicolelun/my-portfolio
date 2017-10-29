
var headerHeight = $("header").outerHeight();
var collageContainerHeight = $(window).height() - headerHeight;
$(".collage-container").css("height", collageContainerHeight);
$(".contact-container").css("height", collageContainerHeight);
$(".contact-content").css("height", collageContainerHeight);

/* ==============================================
    SCROLL TO TOP
============================================== */

$(document).ready(function() {
	$("button.top").click(function() {
	  	$("body").animate({
	    	scrollTop: 0
	  	}, 600);
	});
});

/* ==============================================
     MODAL
============================================== */

/*==========  OPEN MODAL  ==========*/

function openModal(event, modalID) {
    document.getElementById(modalID).style.display = "block";
}

/*==========  CLOSE MODAL  ==========*/

function closeModal(event) {
    var modals = document.getElementsByClassName('w3-modal');
    for (var i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
}

/*==========  CLOSE MODAL WHEN CLICKING OUTSIDE  ==========*/

// Get all modal windows.
var modals = document.getElementsByClassName('w3-modal');
var navmodals = document.getElementsByClassName('nav-modal');

// Close the modal window when the user clicks anywhere outside of it.
window.onclick = function(event) {
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }   

    for (var i = 0; i < navmodals.length; i++) {
        if (event.target == navmodals[i]) {
            navmodals[i].style.display = "none";
        }
    }   
}

/* ==============================================
     SLIDESHOW
============================================== */

var slideContainer = document.querySelector(".slideshow");
var slides = [];
var numbers = [];
var slideIndex = 1;
var prevBtn;
var nextBtn;
var globalIndex = 1;

showSlide(slideIndex);

// function screenWidth() {
//     console.log(window.innerWidth);
// }

// For left and right buttons
function plusSlides(n) {
    showSlide(slideIndex += n);
}

// For thumbnail navigation
function currentSlide(n) {
    showSlide(slideIndex = n);
}

$(document).ready(function(){
    $(".slide-img").click(function(){
        plusSlides(1);
    });

    $(".thumbnail").click(function(){

        var thumbnails = document.querySelectorAll(".thumbnail");

        for (var i = 0; i < thumbnails.length; i++) {
            if ($(this).is(thumbnails[i])) {
                thisSlide = i + 1;
                currentSlide(thisSlide);
            }
        }
    });
});

function showSlide(n) {

    slides = document.querySelectorAll(".slide-img");

    if (slides.length > 0) {

        // If n exceeds the array of main images, then reset n to 1
        if (n > slides.length) {
             slideIndex = 1;
        }

        // If n is less than the array of main images, then reset n to the end
        if (n < 1) {
             slideIndex = slides.length;
        }

        // Loop through the array of main images and hide them
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.add("hide-slide");
        }

        // Loop through the array of thumbnails and replace "active" with null
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }

        // Display one main image
        slides[slideIndex-1].classList.remove("hide-slide");

        // Display the alt as the caption
        // console.log([slides[slideIndex-1].alt]);
        if (slides[slideIndex-1].alt) {
            var caption = document.querySelector(".caption");
            if (caption) {
                caption.textContent = slides[slideIndex-1].alt;
            } 
            // captionText.innerHTML = slides[slideIndex-1].alt;
        }

        // Display the slide number
        var slideNum = document.querySelector(".slide-number");
        if (slideNum) {
            slideNum.textContent = slideIndex + " / " + (slides.length);
        }

    //     // Set one thumbnail to active
    //     // dots[slideIndex-1].className += " active";

    }

}

