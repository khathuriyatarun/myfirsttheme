$(document).ready(function(){
    $('.aside_angle').click(function(){
        $('aside').toggleClass('expanded');
        $('header').toggleClass('expanded');
        $('.template').toggleClass('expanded');
    });
});