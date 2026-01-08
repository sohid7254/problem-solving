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

// Problem 7: Find Even Numbers in an Array****
function findEven(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(findEven([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitalizeWords("hello world"));

// Problem 9: Find the Factorial of a Number*****
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// Problem 10: PingPong Challenge******
function pingPong() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
}
pingPong();