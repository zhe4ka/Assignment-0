function sumOfAllOddNumbers(nums) {
 count = 0;
for(var i = 0; i < nums.length; i++) {
  if(nums[i]%2==1 && nums[i]!=0)
  count++;
  }
return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
