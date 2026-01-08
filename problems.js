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

// Problem-3: Check for Palindrome
function reverseStr(rev) {
    let reversed = "";
    for (let i = rev.length - 1; i >= 0; i--) {
        reversed += rev[i];
    }
    return reversed;
}

function isPalindrome(str) {
  let reversed = reverseStr(str);
  return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// Problem-4: Find the Maximum Number******
function maxNum(char) {
  let max = char[0];
  for (let num of char) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(maxNum([5, 1, 9, 3]));

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  let number = [];
  for (let num of arr) {
    if (!number.includes(num)) {
      number.push(num);
    }
  }
  return number;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array*****
function totalNum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(totalNum([1, 2, 3, 4]));