/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let ans = false;
  str = str.toLowerCase()
  let alphanum = []
  for(let i=0; i<str.length; i++){
    if(('a'<=str[i] && str[i]<='z') || ('A'<=str[i] && str[i]<='Z')){
      alphanum.push(str[i]);
    }
  }
  alphanum = alphanum.join('');
  let original = alphanum;
  alphanum = alphanum.split('');
  alphanum = alphanum.reverse();
  alphanum = alphanum.join('');
  if(original == alphanum){
    ans = true;
  }
  return ans;
}

module.exports = isPalindrome;
