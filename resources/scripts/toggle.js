$(function () {
    $('.toggle').click(function (e) {
        if ($(this).attr('data-active') == 'on')
            $(this).attr('data-active', 'off');
        else if ($(this).attr('data-active') == 'off')
            $(this).attr('data-active', 'on');
    });
});