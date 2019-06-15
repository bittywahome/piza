var pizza_Prices=new Array();
pizza_Prices["bp-sm"]=600;
pizza_Prices["bp-md"]=800;
pizza_Prices["bp-lg"]=1000;
pizza_Prices["vg-sm"]=500;
pizza_Prices["vg-md"]=700;
pizza_Prices[vg-lg]=1050;
pizza_Prices[pc-lg]=1200;
pizza_Prices[pc-md]=1050;
pizza_Prices[pc-sm]=800
pizza_Prices[bs-md]=700;
pizza_Prices[bs-lg]=1000;
pizza_Prices[bs-sm]=500;

function getpizzaPrices()
{
    var pizzaPrice=0;
    var theForm = document.forms[""];
    var selectedPizza = theForm.elements[""];
    for (var i=0; i<12; i++);
{
    if(selectedpizza [i].checked)
{
pizzaPrice=pizza_Prices[selectedpizza[i].value];
}
}
return pizzaPrice;
}

var topping_Prices= new Array();
topping_prices['none']=0;
topping_prices[mt-sm]=100;
topping_prices[mt-md]=200;
topping_prices[mt-ml]=250;
topping_prices[mt-ps]=100;
topping_prices[nt-pm]=250;
topping_prices[mt-pl]=250;
topping_prices[vg-os]=50;
topping_prices[vg-om]=100;
topping_prices[vg-ol]=150;

function getttoppingPrice()
{
    var toppingPrice=0;
    var theForm= document.forms[""]
    var selectedtopping= theForm.elements[""];
    pizzatoppingPrice= topping_Prices[selectedtopping.value]
    return pizzatoppingPrice;
}

function getTotal()
{

var pizzaPrice= getpizzaPrice()+ getttoppingPrice();
document.getElementById().innerHTML=  + pizzaPrice;
}
