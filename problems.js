// Problem-1: Reverse a String
function reverseString(rev) {
  let reversed = "";
  for (let i = rev.length - 1; i >= 0; i--) {
    reversed += rev[i];
  }
  return reversed;
}
console.log(reverseString("hello")); 








