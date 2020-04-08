function getMaxLessThanK(n,k){
    var max=0;
    for(var i=1;i<n;i++){
        for(var j=i+1;j<=n;j++){
            var result=parseInt(i&j);
            if(result <k && result>max){
                max=result;
            }
        }
    }
    return max;
}