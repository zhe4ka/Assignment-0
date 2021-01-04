function isPalindrome(word) {
  var stack=new Array() ;
 var queue=new Array();
 var palindromeOrNot=true;
 
  for (var i=0; i<word.length; i++){
word[i] = word[i].toLowerCase();
stack.push(word[i]);
queue.push(word[i]);
}
while(queue.length>0){
  var queueVar=queue.shift();
  var stackVar=stack.pop();
}
if(queueVar!=stackVar){
   palindromeOrNot=false; 
}
 return palindromeOrNot;
}

// Do not edit this line;
module.exports = isPalindrome;
