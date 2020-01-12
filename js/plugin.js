/*golable $, document*/

$('document').ready(function () {
    'use strict';

    $('section').animate({
        top: '50%'
    }, 1000);
    $('section').animate({
        minWidth: '80%'
    }, 1000);
    $('section').animate({
        minHeight: '80%'
    }, 1000, function () {
        $('i').slideDown();
    });
    $('.info').click(function () {
        $('.more-info').slideToggle();
    })
})