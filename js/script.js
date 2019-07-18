$(document).ready(function(){
	$('#slide').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
	autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});
$('#btnmenu').click(function(){
    $('#menutop').slideToggle('fast');
});
});
$(document).ready(function(){
	$('#th-pr').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    navText:["<img src='images/nav.png'>","<img src='images/nav-next.png'>"],
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
});
$(window).scroll(function () {
    var _scrollTop = $(window).scrollTop();
    if (_scrollTop > 72) {
        $("#main-menu").addClass("fix-top");
        return false;
    } else {
        $("#main-menu").removeClass("fix-top");
        return false;
    }
   })
})
