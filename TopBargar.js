$(function() {
    $('.navMenu').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.navTogg').addClass('active');
        } else {
            $('.navTogg').removeClass('active');
        }
    });
});
