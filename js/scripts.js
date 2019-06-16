$(document).ready(function() {
    $('label').click(function() {
        var total=0;
        $('.option:checked').each(function(){
            total += parseInt($(this).val()); 
    });
    $('#total').html(total + ("/="));
    })
});