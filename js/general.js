//@prepros-prepend jquery-3.1.1.js

$(document).ready(function() {
	$('.lista-actividades .actividad h3').click(function() {
		$(this).next().slideToggle();
		$(this).find('i').toggleClass('open');
	});
});