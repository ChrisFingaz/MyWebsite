(function($) {
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {
    allPanels.slideUp();

    var currentTarget = $(this).parent().next();

    if (currentTarget.css('display') == 'none') {
    	currentTarget.slideDown();
    } else {
    	currentTarget.slideUp();
    }
    
    return false;
  });

})(jQuery);