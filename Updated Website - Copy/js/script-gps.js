var upBtn = $('btnUp');

$(window).scroll(function(){
    if ($(window).scroll() > 300){
        upBtn.addClass('show');
    }else {
        upBtn.removalClass('show')
    }
});

upBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});