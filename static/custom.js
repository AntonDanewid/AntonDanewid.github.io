// change bg colour on scroll
$(window).scroll(function(){
	$('nav').toggleClass('scroll', $(this).scrollTop() > 50);
});

// smooth scrolling
$("nav").find(".scroll").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 60
    });
});
