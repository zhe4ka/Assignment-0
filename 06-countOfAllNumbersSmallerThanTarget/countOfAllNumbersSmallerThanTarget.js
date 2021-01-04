function countOfAllNumbersSmallerThanTarget(nums, target) {
 count = 0;
  nums.forEach(value => {
    if (value<target)
      count++;
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
