/*
 Third party
 */

$(function() {
    console.log('in common.js! ');
})

$(document).ready(function() {

    // Ajax send mail
    /*$(".order").submit(function () {
        ajax(this);
	});
    */
    // Подмена значения из какого блока кликают
    /*$(".fancybox").click(function () {
        $("#form-order").find("#from_section").val($(this).attr("section"));
    });*/

    /*alert(getPageSize()[1]);*/
    /*if ( (getPageSize()[0] > 1199) && (getPageSize()[1]) > 599 ) {
        $('#header').css("background-color", "transparent");
        $('#header').css("background-image", "none");
        $('#bg_header-container').css("background-image", "url('../img/header/bg.jpg')");
        $('#bg_header-container').css("background-color", "#000");
    }
    else {
        $('#header').css("background-image", "url('../img/header/bg.jpg')");
        $('#bg_header-container').css("background-color", "#000");
        $('#bg_header-container').css("background-image", "none");
    }*/

    /*$( window ).resize(function() {
        if ( (getPageSize()[0] > 1199) && (getPageSize()[1]) > 599 ) {
            $('#header').css("background-color", "transparent");
            $('#header').css("background-image", "none");
            $('#bg_header-container').css("background-image", "url('../img/header/bg.jpg')");
            $('#bg_header-container').css("background-color", "#000");
        }
        else {
            $('#header').css("background-image", "url('../img/header/bg.jpg')");
            $('#bg_header-container').css("background-color", "#000");
            $('#bg_header-container').css("background-image", "none");
        }
    });*/

    $('a.btn-more').click(function () {
        var bl = $(this).closest('.content_package');

        bl.animate ({
                opacity: 0,
                height: 0
            }, 500, function() {
            // Animation complete.
            bl.css("display", "none");

            bl.next().css("display", "inline-block");
            bl.next().animate({
                    opacity: 1,
                    height: 858
                }, 1000, function() {
                // Animation complete.
            });
        });

        return false;
    });

    $('.btn_exit').click(function () {
        var bl = $(this).closest('.content_package');

        bl.animate ({
                opacity: 0,
                height: 0
            }, 1000, function() {
            // Animation complete.
            bl.css("display", "none");

            bl.prev().css("display", "inline-block");
            bl.prev().animate({
                    opacity: 1,
                    height: 553
                }, 500, function() {
                // Animation complete.
            });
        });
        
        return false;
    });

});

// Кроссбраузерное получение размеров окна на JS
/*function getPageSize() {
	var xScroll, yScroll;

	if (window.innerHeight && window.scrollMaxY) {
		xScroll = document.body.scrollWidth;
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
		xScroll = document.body.scrollWidth;
		yScroll = document.body.scrollHeight;
	} else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight) { // Explorer 6 strict mode
		xScroll = document.documentElement.scrollWidth;
		yScroll = document.documentElement.scrollHeight;
	} else { // Explorer Mac...would also work in Mozilla and Safari
		xScroll = document.body.offsetWidth;
		yScroll = document.body.offsetHeight;
	}

	var windowWidth, windowHeight;
	if (self.innerHeight) { // all except Explorer
		windowWidth = self.innerWidth;
		windowHeight = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	}

	// for small pages with total height less then height of the viewport
	if (yScroll < windowHeight) {
		pageHeight = windowHeight;
	} else {
		pageHeight = yScroll;
	}

	// for small pages with total width less then width of the viewport
	if (xScroll < windowWidth) {
		pageWidth = windowWidth;
	} else {
		pageWidth = xScroll;
	}

	return [pageWidth, pageHeight, windowWidth, windowHeight];
}*/

function ajax(ob) {
	var msg;
	var processor;
	var result;

	var result = $(".result");

	processor = "./libs/mail.php";

	$.ajax({
		type: "POST",
		url: processor,
		data: $(ob).serialize(),
		error: function (xhr, str) {

		}
	}).done(function () {
		$(ob).find("[type='text']").val("");
		$(ob).trigger("reset");

		/*setTimeout(function () {
			$.fancybox.close();
			result.addClass("animated zoomInDown show").fadeIn('slow');
		}, 500);*/

	});
	return false;
}

/* create social networking pop-ups*/
(function() {
	/* link selector and pop-up window size*/
	var Config = {
		Link: "a.share",
		Width: 500,
		Height: 500
	};

	/* add handler links*/
	var slink = document.querySelectorAll(Config.Link);
	for (var a = 0; a < slink.length; a++) {
		slink[a].onclick = PopupHandler;
	}

	/* create popup*/
	function PopupHandler(e) {
		e = (e ? e : window.event);

		var t = e.currentTarget;

		var
			px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
			py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);

		/* open popup*/
		var popup = window.open(t.href, "social",
			"width="+Config.Width+",height="+Config.Height+
			",left="+px+",top="+py+
			",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
		if (popup) {
			popup.focus();
			if (e.preventDefault) e.preventDefault();
			e.returnValue = false;
		}

		return !!popup;
	}

}());
