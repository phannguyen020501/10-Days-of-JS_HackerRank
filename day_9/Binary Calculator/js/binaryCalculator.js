  var btn0=document.getElementById("btn0");
var btn1=document.getElementById("btn1");
var btnClr=document.getElementById("btnClr");
var btnEql=document.getElementById("btnEql");
var btnSum=document.getElementById("btnSum");
var btnSub=document.getElementById("btnSub");
var btnMul=document.getElementById("btnMul");
var btnDiv=document.getElementById("btnDiv");
var res=document.getElementById("res")
btn0.addEventListener("click", function(){
    res.innerHTML+="0";
})
btn1.addEventListener("click", function(){
    res.innerHTML+="1";
})
btnSum.addEventListener("click", function(){
    res.innerHTML+="+";
})
btnSub.addEventListener("click", function(){
    res.innerHTML+="-";
})
btnMul.addEventListener("click", function(){
    res.innerHTML+="*";
})
btnDiv.addEventListener("click", function(){
    res.innerHTML+="/";
})
btnClr.addEventListener("click", function(){
    res.innerHTML=null;
})
btnEql.addEventListener("click", function(){
    var line=res.innerHTML;
    var regex=new RegExp("[/*-+]");
    var element=line.split(regex);
    var option=line.charAt(element[0].length);
    var x=parseInt(element[0],2);
    var y=parseInt(element[1],2);
    console.log(x);
    console.log(y);
    var decimal;
    switch (option) {
        case "+":
            decimal=x+y;
            break;
        case "-":
            decimal=x-y;
            break;
        case "*":
            decimal=x*y;
            break;
        case "/":
            decimal=x/y;
            break;    
    }
    res.innerHTML=decimal.toString(2);


})