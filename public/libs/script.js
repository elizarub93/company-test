$(document).ready(function(){
	//показ и скрытие уведомлений

	$('.notice__btn').on('click', function(){
		$(this).toggleClass('active').parent('.notice__info').parent('.notice__item').toggleClass('active');
	});

	 // открытие и закрытие мобильного меню
	 $('.header__mobile-icon').on('click', function(){
	 	$('.mobile-menu').show();
	 	$('.wrapper').css('overflow-y','hidden');
	 });

	 $('.mobile-menu__close').on('click', function(){
	 	$('.mobile-menu').hide();
	 	$('.wrapper').css('overflow-y','auto');
	 });

	 //карусель новостей

	 $('.news__mobile').slick({
	 	dots: true,
	 	arrows: false
	 });

	 //меню футер

	 $('.footer__mobile .footer__header').on('click', function(){
	 	$(this).toggleClass('active').siblings('.footer__items').toggle();
	 })
});