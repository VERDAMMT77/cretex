$(function() {

    $('ul.benefits__link').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.benefits__row').removeClass('active').eq($(this).index()).addClass('active');
    });

});

var swiper = new Swiper(".team__swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".team__next",
        prevEl: "team__prev",
    },
   autoplay:  {
        delay: 2000
   },
    loop: true
});

// const swiper = new Swiper('.swiper', {
//     loop: true,
//
//     pagination: {
//         el: '.swiper-pagination',
//     },
//
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });
