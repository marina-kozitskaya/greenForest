$(function(){
    window.sr = new scrollReveal();
    //resize function
    function screenWidth() {
        var wi = $(window).width();
        if (wi <= 320){
            $('.greeting-word').css({
                fontSize: '36px'
            });
        }
        if (wi > 320){
            $('.greeting-word').css({
                fontSize: '40px'
            });
        }
        if (wi <= 380){
            $('.forest').addClass('foolWidth');
            $('.greenForestImage').addClass('foolWidth').css({
                minHeight: 105
            });
        }
        if (wi > 380){
            $('.forest').removeClass('foolWidth');
            $('.greenForestImage').removeClass('foolWidth').css({
                minHeight: 162
            });
        }
        if (wi <= 560){
            $('.input input').css({
                fontSize: '18px',
                width: '60%'
            });
            $('.buttonLogin a').css({
                fontSize: '20px',
                padding: '20px'
            })
        }
        if (wi > 560){
            $('.input input').css({
                fontSize: '20px',
                width: '400px'
            });
            $('.buttonLogin a').css({
                fontSize: '24px',
                padding: '40px'
            })
        }
    }
    screenWidth();
    $(window).resize(function() {
        screenWidth();
    });
    //validation of form
    var validation;
    function valid() {
        validation = 0;
        var re = /^[0-9]+$/;
        var myPhone = $('#phone').val();
        var valid = re.test(myPhone);
        if (valid) {
            validation = 1;
            var reName = /^[А-Яа-яA-Za-z]+$/;
            var myName = $('#userName').val();
            valid = reName.test(myName);
            if (!valid) {
                $('#userName').addClass('invalid');
                validation = 0;
            }
        } else {
            $('#phone').addClass('invalid');
        }
    }
    //click on button
    $('.buttonGetCode').on('click', function(){
        valid();
        if (validation == 1) {
            $('.message span:first-child').addClass('disabledBlock');
            $('.message span:last-child').removeClass('disabledBlock');
            $('.input:nth-child(1)').addClass('invisibleBlock');
            $('.input:nth-child(2)').addClass('invisibleBlock');
            $('.input:nth-child(3)').removeClass('disabledBlock').hide().fadeIn(300);
            $('#userName').attr('disabled', true);
            $('#phone').attr('disabled', true);
            $('.buttonGetCode').addClass('disabledBlock');
            $('.buttonConnection').removeClass('disabledBlock');
            $(".message").fadeOut('slow').fadeIn('slow').fadeOut('slow').fadeIn('slow');
        }
    });
    //focus on input
    $('input').on ('focus', function(){
        if($(this).hasClass('invalid')) {
            $(this).removeClass('invalid')
        }
    });
});