$(".open_fancybox").click(function() {
    
    $.fancybox.open([
        {
            href : 'img/galleries/vimeo/player.png'
        },
        {
            href : 'img/galleries/vimeo/player.png'
        },
        {
            href : 'img/galleries/vimeo/player.png',                
            title : '3rd title'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});