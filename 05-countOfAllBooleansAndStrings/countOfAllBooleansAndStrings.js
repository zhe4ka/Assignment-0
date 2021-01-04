function countOfAllBooleansAndStrings(arr) {
count=0;
  arr.forEach(value => {
    if (typeof value=='boolean' || typeof value == 'string')
      count++;
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
