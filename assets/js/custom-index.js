var copyEmailBtn = document.querySelector('.emailCopyBtn');

copyEmailBtn.addEventListener('click', function(event) {
  //Select the Paragraph element
  var emailLink = document.querySelector('.myEmail');

  var range = document.createRange();
  range.selectNode(emailLink);
  window.getSelection().addRange(range);

	try {
	    //Selected the Paragraph text so execute copy
	    document.execCommand('copy');
  	}
	catch(err) {
		alert('Please press Ctrl/CMD + C to copy');
	}


  window.getSelection().removeAllRanges();
}, true);

$("h2, h1, #nameUnderline, .logo").css("opacity", "0");

$(document).ready(function(){
    $(".hero").hide(0).fadeTo(2000,1);
    setTimeout(function()
    {
        $(".logo").css("opacity", "1");
        $(".logo").addClass('animated zoomIn');
    } , 500);
    setTimeout(function()
    {
        $("h2, h1").css("opacity", "1");
        $("h2, h1").addClass('animated fadeInDown');

    } , 1250);
    setTimeout(function()
    {
        $("#nameUnderline").css("opacity", "1");
        $("#nameUnderline").addClass('animated bounceInUp');
    } , 2000);

	//Parallax background effect
	$(function() {
		var $window = $(window);

		$('section[data-type="background"]').each(function(){
			var $object = $(this);

			$(window).scroll(function() {
				var yPos = -($window.scrollTop() / $object.data('speed'));

				var coords = '50% '+ yPos + 'px';

				$object.css({ backgroundPosition: coords });
			});
		});
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scrollToTopBtn').fadeIn();
			$(".scrollToTopBtn").css("display", "table");
		} else {
			$('.scrollToTopBtn').fadeOut();
		}
	});

	$('.scrollToTopBtn').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
