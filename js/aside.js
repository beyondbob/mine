var show = false;
$(document).ready(function(){
$('.side-btn').on('click', function () {
    if (!show) {
        $('.side-back').fadeIn(400);
        $('.side-area').animate({right: 0}, 300);
        $('body').css('overflow-y', 'hidden');
    } else {
        $('.side-back').fadeOut(400);
        $('.side-area').animate({right: -225}, 300);
        $('body').css('overflow-y', 'visible');
    }
    show = !show;
});

$('.side-back').on('click', function () {
    show = false;
    $('.side-back').fadeOut(400);
    $('.side-area').animate({right: -225}, 300);
    $('body').css('overflow-y', 'visible');
});


});
$(function () {
    var time = new Date();
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();

    var x = time.getDay();

    var ar = ['日', '一', '二', '三', '四', '五', '六'];
    var str = '星期' + ar[x];

    $('.side-week').html(str);
    $('.side-data').html(y + '/' + m + '/' + d)

})()