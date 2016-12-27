jQuery.noConflict();
jQuery(document).ready(function($) {    
// start code

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
  document.querySelector('head').appendChild(msViewportStyle);
}
var nua = navigator.userAgent
var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
if (isAndroid) {$('select.form-control').removeClass('form-control').css('width', '100%')}

var wow = new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,
    live:         true,
    callback:     function(box) {
    },
    scrollContainer: null
  }
);
wow.init();

//slider
if( $('#slider').length > 0 && $(window).height() < $(window).width() ){
	$('#slider').height( $(window).height() );
	$(window).resize(function(){
		$('#slider').height( $(window).height() );
	});
}
//slider

//Gallery Goods
if(typeof $.fancybox == 'function'){
	$("#gcarousel .item a").fancybox({
			padding: 0,
			margin: 0,
			autoSize : true,
	        scrolling : 'hidden',
        	autoCenter: true,
			afterShow: function() {
				$(".fancybox-wrap").touchwipe({
					wipeLeft: function() {
						$.fancybox.next();
					},
					wipeRight: function() {		
						$.fancybox.prev();	
					},
					preventDefaultEvents: false
				});
			},
			afterClose: function() {
			}
	});
}

$("#gcarousel").touchwipe({
	wipeLeft: function() {
    	$("#gcarousel").carousel('next'); 
    },
	wipeRight: function() {
		$("#gcarousel").carousel('prev'); 	
    },
    preventDefaultEvents: false
});
//Gallery Goods

// end code    
});
