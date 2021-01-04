function fizzBuzz(start, end) {
var nums=[] ;
 j=0;
  for (var i=start; i<=end; i++){
    if (i%5==0 && i%3==0)
    nums[j]="FizzBuzz;
    else if (i%3==0 && i%5!=0)
    nums[j]="Fizz";
    else if (i%5==0 && i%3==0)
    nums[j]="Buzz";
    else
     nums[j]=i;
    j++;
  }
 return nums;
}

// Do not edit this line;
module.exports = fizzBuzz;
