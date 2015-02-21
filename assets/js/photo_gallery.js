
    // var $block = $(.group2);
        
    // $("#viewMore").click(function () {
    //     $('.group2').slideDown('slow');
    //     $block.stop().slideDown( 1000 );
    //     $('.gridghost').slideDown('slow');


        // $(this).find('span').text() == 'View More' ? $(this).find('span').text('View Less') : $(this).find('span').text('View More');
        // $('.gridghost').slideDown('slow');
        // if($(this).find('i').hasClass('fa-angle-down')){
        //     $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
        // } else {
        //     $(this).find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
        // }
    // });

$(document).ready(function(){
    $('#procontainer .row').addClass('hidden');
    var browser_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (browser_width < 768) {
        $('#procontainer .row').first().removeClass('hidden').addClass('showing');
    } else { 
        $('#procontainer .row').first().removeClass('hidden').addClass('showing');
        $('#procontainer .hidden').first().removeClass('hidden').addClass('showing');
    }

    $(document).on('click', '#viewMore', (function() {
        $('#procontainer .hidden').first().slideDown(1000).removeClass('hidden');
        if ($('#procontainer .hidden').length == 0 ){
            $(this).find('span').text('View Less');
            $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
            $(this).removeClass('#viewMore').removeAttr('id').attr('id','viewLess')
        }
    }));

    $(document).on('click', '#viewLess', (function() {
        $('#procontainer .row:not(.showing)').addClass('hidden');
        $(this).removeClass('#viewLess').removeAttr('id').attr('id','viewMore');
        $(this).find('span').text('View More');
            $(this).find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
    }));

});