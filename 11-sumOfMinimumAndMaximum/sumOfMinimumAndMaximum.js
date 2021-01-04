function sumOfMinimumAndMaximum(nums) {
   max=Math.max.apply(null, nums);
  min=Math.min.apply(null, nums);  
 return max+min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
