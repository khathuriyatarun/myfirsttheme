$(document).ready(function(){
    $('.aside_angle').click(function(){
        $(this).toggleClass('rotation');
        $('aside').toggleClass('expanded');
        $('header').toggleClass('expanded');
        $('.template').toggleClass('expanded');
    });

    // $('nav').mouseover(function(){
    //     console.log('mouseenter');
    //     $('aside').css('width', '265px');
    // });

    $('.has_childs').click(function(e){
        e.preventDefault();
        $(this).toggleClass('child_expanded');
    });
});