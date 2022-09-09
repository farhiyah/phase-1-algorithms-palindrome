function isPalindrome(word) {
  // Write your algorithm here
  const str = word.split("");
  const strReverse = str.reverse().join("");
  if (strReverse === word) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("ab"));


/* 
  Add your pseudocode here
*/






// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
