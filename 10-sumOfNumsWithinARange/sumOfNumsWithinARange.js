function sumOfNumsWithinARange(nums, start, end) {
count = 0;
  nums.forEach(value=>{
    if(value>=start && value<=end)
    count++;
  })
    
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
