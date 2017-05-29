/**
 * Created by ryzhkov on 29.05.17.
 */
'use strict';
$(function () {

    $('#tabs').find('li').on('click', function () {
        $('#tabs').find('li').removeClass('active');
        $(this).addClass('active');
        $('.content').hide();
        var selected_tab = $(this).find('a').attr('href');
        $(selected_tab).show();
    });

});