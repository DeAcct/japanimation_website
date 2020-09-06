$(function(){
    $('.slider_handler a').click(function(){
        $('.slider_handler span').css({
            opacity:0
        })
        $(this).parent().siblings().animate({ //li
            width: '5%'
        },300)
        $(this).parent().siblings().children().animate({ //a
            width:'100%'
        },0)
        $(this).parent().animate({ //li
            width:'80%'
        },300)
        $(this).animate({ //a
            width:'100%'
        },0)
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