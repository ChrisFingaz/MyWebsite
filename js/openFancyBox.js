$(".open_fancybox").click(function() {
    
    $.fancybox.open([
        {
            href : 'http://fancyapps.com/fancybox/demo/1_b.jpg',                
            title : '1st title'
        },
        {
            href : 'http://fancyapps.com/fancybox/demo/2_b.jpg',                
            title : '2nd title'
        },
        {
            href : 'http://fancyapps.com/fancybox/demo/3_b.jpg',                
            title : '3rd title'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});