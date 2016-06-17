$(window).resize(displayWidth); 

function displayWidth() {
	$( '#window-width' ).css('visibility', 'visible');
	var myWidth = $( window ).width();
	var elemWidth = $( '#window-width' ).parent().width();
	var str = '<p>' + 'Window width = ' + myWidth + '</p>' + '<p>' + 'Element width = ' + elemWidth + '</p>';
	$('#window-width').html(str);
	hideWidth();
}

function hideWidth() {
    setTimeout(function(){ $( '#window-width' ).css('visibility', 'hidden'); }, 7000);
}