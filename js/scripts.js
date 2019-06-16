/* we are going to calculate every one of the inputs when we click one.
when we click one,its gonna re-calculate all of them at once everytime something is changed.using the each (function()*/


$(document).ready(function() {
    $('label').click(function() {
        var total=0;
        $('.option:checked').each(function(){
            total += parseInt($(this).val()); 
    });
    $('#total').html(total + ("/="));
    })
});