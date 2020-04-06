function modifyArray(nums) {
    var newNums=new Array(nums.length);
    for(var i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            newNums[i]=nums[i]*2;
        }else{
            newNums[i]=nums[i]*3;
        }
    }
    return newNums;
}
