	$(document).ready(function() {
    // $('.viewport').mouseenter(function(e) {
    $('.viewport').mousemove(function(e) {
        $(this).children('a').children('img').animate({ height: '1500', left: '0', top: '0', width: '2400'}, 500);
        $(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '500', left: '-20', top: '-20', width: '800'}, 500);
        $(this).children('a').children('span').fadeOut(200);
    });
});