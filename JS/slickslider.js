$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        // Số slide hiển thị
        slidesToShow: 1,
        // Số slide khi scroll
        slidesToScroll: 1,
        // Tự động dịch chuyển
        // autoplay: true,
        dots: false,
        // Tự động dịch sau n giây
        // autoplaySpeed: 2000,
        // Làm mất 2 cái prev và next
        arrows: false,
        // prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        // nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});