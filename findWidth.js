$(window).resize(displayWidth); 

function displayWidth() {
	var myTag = $( '#window-width' ).closest();
	var myWidth = $( window ).width();
	var elemWidth = $( '#window-width' ).parent().width();
	var str = '<p>' + 'Window width = ' + myWidth + '</p>' + '<p>' + 'Element width = ' + elemWidth + '</p>';
	
	$('#window-width').html(str);
}