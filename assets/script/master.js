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

$('#login_btn').click(function(){
    var username = $('#email').val();
    var password = $('#password').val();

    if(username == '' && password == ''){
        $('#email').addClass('input_danger');
        $('#password').addClass('input_danger');
    } else if(username == ''){
        $('#email').addClass('input_danger');
    } else if(password == ''){
        $('#email').addClass('input_danger');
    } else {
        window.location.href = "../dashboard.html";
    }
});

$('#email').keyup(function(){
    $(this).removeClass('input_danger');
    $('#password').removeClass('input_danger');
});

$('#password').keyup(function(){
    $(this).removeClass('input_danger');
});