/* ==============================================
     ISOTOPE
============================================== */

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer'
    }
});

// filter items on button click
$('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

// bind filter button click
var filtersElem = document.querySelector('.filter-button-group');
filtersElem.addEventListener('click', function(event) {
    // only work with buttons
    if (!matchesSelector(event.target, 'button')) {
        return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[filterValue] || filterValue;
    iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for (var i = 0, len = buttonGroups.length; i < len; i++) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener('click', function(event) {
        // only work with buttons
        if (!matchesSelector(event.target, 'button')) {
            return;
        }
        buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
        event.target.classList.add('is-checked');
    });
}

