// The function will convert the string to an array of characters, reverse the array, and then join back into a string
function solution(str) {
  return str.split('').reverse().join('');
}

// Test the function
const inputString = "Hello, world!";
const reversedString = solution(inputString);
console.log(reversedString); // Output: "!dlrow ,olleH"
