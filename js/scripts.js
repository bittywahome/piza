/* we are going to calculate every one of the inputs when we click one.
when we click one,its gonna re-calculate all of them at once everytime something is changed.*/
//business logic

$(document).ready(function() {
    //when you click the label
        $('label').click(function() {
    //its gonna say the total is 0 and for every class that has options we are gonna take the value 
    //and add to it using +=
            var total=0;
            $('.option:checked').each(function(){
    //(this).val() to get the values I had inputed in the html form
                total += parseInt($(this).val()); 
        });
    //calculate total        
        $('#total').html(total + ("/="));
        })
    });
    
    




// Enter values into the invoice table
function invoice() {
    var crust= document.querySelector('input[name="crust"]:checked')
    console.log(crust);
$(".crust").html(crust.value+" Crust");
$(crust.value).html("+"+total+"/=");

var size= document.querySelector('input[name="size"]:checked')
console.log(size);
$(".size").html(size.value+ "size");
$(size.value).html("+"+total + "/=");

var toppings= document.querySelector('input[name="toppings"]:checked')
console.log(toppings);
$(".toppings").html(toppings.value+ "topping");
$(toppings.value).html("+" +total +"/=");
}

//user logic

$(document).ready(function () {
    $("#delivery").click(function () {
        prompt("Name")
        prompt("Location")
        prompt("Addrress")
        alert("Your charges for delivery is ksh200")
        alert("Your order will be delivered to your location")
    });
  });










