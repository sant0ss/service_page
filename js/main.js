clicked = true;


$('nav.mobile h3').click(function(){
	if(clicked){
		$('nav.mobile').find('ul').slideToggle();
		//$('.logo').css('color','white')
		//$(this).css('color','white');
		clicked = false;
	} else {
		$('nav.mobile').find('ul').slideToggle();
		//$('.logo').css('color','#282828')
		//$(this).css('color','#282828');
		clicked = true;
	}
})

$('nav a').click(function(){
var href = $(this).attr('href');
var offSetTop = $(href).offset().top;

$('html,body').animate({'scrollTop':offSetTop});

return false;
})

$('nav.mobile i').click(function(){
    var el = $(this).parent().find('ul');
    if(el.is(':visible') ==false){
        el.fadeIn();
    }else{
        el.fadeOut();
    }
})
