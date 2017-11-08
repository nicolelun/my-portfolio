// var apples = document.getElementById('apple-figure');

const mq = window.matchMedia( "(max-width: 600px)" );

// media query event handler
// if (matchMedia) {
//     mq.addListener(WidthChange);
//     WidthChange(mq);
// }

// media query change
// function WidthChange(mq) {
//     if (mq.matches) {
//         $(".apples-horizontal").hide();
//     } else {
//         $(".apples-vertical").hide();
//     }
// }

var apples;

if (mq.matches) {
    $("#apple-figure-vertical").show();
    apples = document.getElementById("apple-figure-vertical");

} else {
    $("#apple-figure-horizontal").show();
    apples = document.getElementById("apple-figure-horizontal");
}

var paths = apples.querySelectorAll('path, polyline, line');

$("#Person_Sitting .head").css("display", "none");
$("#Person_Standing .head").css("display", "none");
$("#Person_Sitting .head").delay(2750).fadeIn("fast");
$("#Person_Standing .head").delay(3250).fadeIn("fast");

for (var i = 0; i < paths.length; i++) {
    var length;
    var group = paths[i].parentNode.getAttribute('id');

    length = paths[i].getTotalLength();

    // Clear any previous transition
    paths[i].style.transition = paths[i].style.WebkitTransition =
        'none';
    
    // Set up the starting positions
    paths[i].style.strokeDasharray = length + ' ' + length;
    paths[i].style.strokeDashoffset = length;
    
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    paths[i].getBoundingClientRect();
    
    // Define our transition
    if (group.toLowerCase() == 'apples') {
        paths[i].style.transition = paths[i].style.WebkitTransition =
            'stroke-dashoffset 3s ease-in-out';
    } else if (group.toLowerCase() == 'apple_slices') {
        paths[i].style.transition = paths[i].style.WebkitTransition =
            'stroke-dashoffset 1s ease-in-out 2.5s';
    } else if (group.toLowerCase() == 'apple_slices_horizontal') {
        paths[i].style.transition = paths[i].style.WebkitTransition =
            'stroke-dashoffset 1s ease-in-out 3.25s';
    } else if (group.toLowerCase() == ('flies')) {

        var randDelay = randNum(0, 1.5) + 3.5;
        
        paths[i].style.transition = paths[i].style.WebkitTransition =
            'stroke-dashoffset 0.75s ease-in-out ' + randDelay + 's';
        
        paths[i].style.animationName = paths[i].style.WebkitAnimationName = "shake";
        paths[i].style.animationDuration = paths[i].style.WebkitAnimationDuration = "0.5s";
        paths[i].style.animationDelay = paths[i].style.WebkitAnimationDelay = (randDelay + randNum(1, 1.5)) + "s";
        paths[i].style.animationIterationCount = paths[i].style.WebkitAnimationIterationCount = randInt(12, 17);

    } else {

        var randDelay = randNum(0, 1.5) + 3.5;
        paths[i].style.transition = paths[i].style.WebkitTransition =
            'stroke-dashoffset 0.75s ease-in-out ' + randDelay + 's';

    }
    // Go!
    paths[i].style.strokeDashoffset = '0';
}