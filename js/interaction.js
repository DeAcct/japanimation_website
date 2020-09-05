$(function(){
    $('.slider_handler a').click(function(){
        $('.slider_handler span').css({
            opacity:0
        })
        $(this).parent().siblings().animate({
            width: '50px'
        },500)
        $(this).parent().animate({
            width:'900px'
        },500)
        $(this).animate({
            width:'900px'
        },500)
        $(this).parent().siblings().children().animate({
            width:'50px'
        },500)
        $(this).parent().siblings().children().addClass('not_clicked')
        $(this).addClass('clicked').removeClass('not_clicked')
        return false;
    })
    $('.slider_handler span').mouseenter(function(){
        var wid = $(this).width()
        if (wid!=900){
            $(this).animate({
                opacity:0.3
            },100)
        }
    }).mouseleave(function(){
        $(this).animate({
            opacity:0
        },100)
    })
})