function evenify_all(nums){
    for(let i=0 ; i<nums.length;i++){
        const num= nums[i];
        if(num % 2 == 0){
            console.log(num, ": is even");
        }else{
            console.log(num*2, ": is odd");
        }
    }

}
nums = [12 , 12, 123, 1231 , 231231231231234234324];
evenify_all(nums);

age = [12 , 12, 123, 1231 , 231231231231234234324];
evenify_all(age);