function compute()
{
    var par = document.getElementById("principal").value;
    if(par<=0){
        alert("Enter a Positive number")
    }

    else{
        var p = document.getElementById("principal").value;
        var r= document.getElementById("rate").value;
        var y= document.getElementById("years").value;
        var i= p*y*r/100;
        var year=new Date().getFullYear()+parseInt(y);
        var a=i;
        document.getElementById("result").innerHTML="If you deposit <mark>"+p+"</mark>,\<br\>at an interest rate of <mark>"+r+"</mark>%\<br\>You will receive an amount of <mark>"+a+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    }
}
function ratec(){
    var rateval =document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        