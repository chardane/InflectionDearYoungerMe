
$(document).ready(function(){
    $("#viewMore").click(function () {
        $(this).find('span').text() == 'View More' ? $(this).find('span').text('View Less') : $(this).find('span').text('View More');
        $('.gridghost').slideToggle('slow');
        if($(this).find('i').hasClass('fa-angle-down')){
            $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
        } else {
            $(this).find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
        }
    });
});
