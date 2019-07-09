/*
 Third party
 */

$(function(){
    console.log('in plugins.js! ');
})

$(document).ready(function() {

    //Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	/*$(".fancybox").fancybox();*/
	/*$(".fancybox").fancybox({
		maxWidth: '100%',
		maxHeight: '100%',
		fitToView: false,
		width: '100%',
		height: '100%',
		autoSize: false,
		closeClick: false,
		openEffect: 'none',
		closeEffect: 'none',
		margin: 0,
		closeBtn: true
	});*/
	$(".fancybox").fancybox({
        autoDimensions: true,
        autoSize: true,
		fitToView: false,
		margin: 0,
		padding: 0,
		closeBtn: true,
	}).click(function () {

	});

    // Скроллинг
    /*$(".scrollTo").click(function () {
        $.scrollTo($(this).attr('href'), 800, {
			offset: 0
		});
		return false;
	});*/

});
