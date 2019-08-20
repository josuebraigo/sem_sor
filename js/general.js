//@prepros-prepend jquery-3.1.1.js
//@prepros-prepend slick.min.js


$(document).ready(function() {
	$('.lista-actividades .actividad h3').click(function() {
		$(this).next().slideToggle();
		$(this).find('i').toggleClass('open');
	});

	$('.slide-so').slick();

	$('.indicadores .primero').click(function() {
		$('.slide-so').slick('slickGoTo', 0);
	});

	$('.indicadores .segundo').click(function() {
		$('.slide-so').slick('slickGoTo', 1);
	});

	$('.indicadores .indica').click(function() {
		$('.indicadores .indica').removeClass('active');
		$(this).addClass('active');
	})
});