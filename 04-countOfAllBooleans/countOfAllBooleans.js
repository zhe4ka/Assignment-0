function countOfAllBooleans(arr) {
  count=0;
  arr.forEach(value => {
    if (typeof value=='boolean' )
      count++;
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
