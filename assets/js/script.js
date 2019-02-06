$(document).ready(function () {
    $('.header').html("<h1>Hello world</h1>");
    $('.removed_div').click(function () {
        $(this).remove();
        $('.header').remove();
    })
});

$(document).on('click', 'h1', function () {
    $(this).append("</br>Hello too");
    $(this).css('color', 'red');
});