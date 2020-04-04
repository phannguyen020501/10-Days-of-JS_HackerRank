function factorial(n){
    const number=parseInt(n);
    var result=1;
    if(number===0){
        result=1;
    }else{
        for(var i=1;i<=number;i++){
            result=result*i;
        }
    }
    return result;
}
