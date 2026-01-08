// Problem-1: Reverse a String
function reverseString(rev) {
  let reversed = "";
  for (let i = rev.length - 1; i >= 0; i--) {
    reversed += rev[i];
  }
  return reversed;
}
console.log(reverseString("hello")); 

// Problem-2: Count Vowels in a String
function countVowels(vowelCount) {
  let vowels = "I have a problem";
  let count = 0;
  for (let char of vowelCount.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("programming"));






