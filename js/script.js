//Date Time Alert Function//

var dt = new Date();
var hour = dt.getHours();
var minutes = dt.getMinutes();
var prepend = hour >= 12 ? "PM" : "AM";
var user ="Samad";
// if else elseif conditions
if(hour >= 6 && hour <= 13){
    alert(`Good Morning ${user}`);
}
else if(hour >= 13 && hour <= 18)
{
    alert(`Good AfterNoon ${user}`);
    document.body.style.backgroundColor="yellow";      
}
else if(hour >= 18 || hour <= 5)
{
    alert(`Good Evening ${user}`);
    document.body.style.backgroundColor="black";   
}
//Date Time Alert Function//

//Dairenin Sahesi //
var a=Math.pow(5,2);
var pi =Math.PI;
var sahe=pi * a;
console.log(`Cevrenin Sahesi: ${sahe}`);
//Dairenin Sahesi //

