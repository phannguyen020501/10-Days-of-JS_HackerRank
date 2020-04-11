  var button=document.getElementById("btn");  
 var value=button.value;
button.addEventListener("click",function(){
    value++;
    button.innerHTML=value;
})