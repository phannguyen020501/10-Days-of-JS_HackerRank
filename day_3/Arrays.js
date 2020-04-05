function getSecondLargest(nums) {
    // Complete the function
    var max=0;
    for(var num of nums){
        if(max<num){
            max=num;
        }
    }
    var secondLargest=nums[0];
    for(var num of  nums){
        if((num>secondLargest)&&(num!==max)){
           secondLargest=num;
        }
    }
    return secondLargest;
}
