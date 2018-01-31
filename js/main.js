/* ---- set an even height for a set of elements ---- */
equalHeight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

/* ---- fix alignment bug with service boxes ---- */
$(document).ready(function () {
    equalHeight($('#why .why-item .services-box'));
});

$(window).resize(function () {
    equalHeight($('#why .why-item .services-box'));
});

/* ---- fix alignment bug with team boxes ---- */
$(document).ready(function () {
    equalHeight($('#team .team-box .member-profile'));
});

$(window).resize(function () {
    equalHeight($('#team .team-box .member-profile'));
});

/* ---- mixitup.js our work sorting ---- */
$('#thework').mixItUp({
    animation: {
        duration: 1000
    }
});

/* ---- our ideology hover ---- */
$('.process-box').hover(function() {
    $(this).find('.process-intro').hide();
    $(this).find('.process-content').fadeIn();
}, function() {
    $(this).find('.process-content').hide();
    $(this).find('.process-intro').fadeIn();
});




/* ---- nav smooth scroll ---- */
$(document).ready(function() {
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 1200);       
    });
});

/* ---- navbar offset ---- */
function scrollToID(id, speed){
    var offSet = 69;
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({scrollTop:targetOffset}, speed);
}

/* ---- animations ---- */
if (typeof sr == 'undefined') {
    window.sr = ScrollReveal({
        duration: 1500,
        delay: 50
    });
}
Royal_Preloader.config({
    onComplete: function () {
        triggerReveals();
    }
});
function triggerReveals() {
    sr.reveal('.bottomReveal', {
        origin: 'bottom'
    }).reveal('.leftReveal', {
        origin: 'left'
    }).reveal('.rightReveal', {
        origin: 'right'
    }).reveal('.topReveal', {
        origin: 'top'
    });

    sr.reveal('.rotateBottomReveal', {
        origin: 'bottom',
        rotate: { x: 90 }
    }).reveal('.rotateLeftReveal', {
        origin: 'left',
        rotate: { x: 90 }
    }).reveal('.rotateRightReveal', {
        origin: 'right',
        rotate: { x: 90 }
    }).reveal('.rotateTopReveal', {
        origin: 'top',
        rotate: { x: 90 }
    })

    sr.reveal('.scaleReveal', {
        origin: 'top',
        scale: 0.6
    });
}

/* ---- close mobile nav on click ---- */
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

/* ---- rotater text ---- */
var current = 1; 
var height = jQuery('.ticker').height(); 
var numberDivs = jQuery('.ticker').children().length; 
var first = jQuery('.ticker h1:nth-child(1)'); 
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2500);