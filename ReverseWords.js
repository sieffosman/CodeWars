//TASK: Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//Split the string into an array of words using spaces as the delimiter.
//Iterate through the array of words.
//For each word, split it into an array of letters, reverse the array of letters, and then join the reversed letters back into a word.
//Join the array of words back into a string using spaces as separators.

function reverseWords(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    const wordLetters = words[i].split('');
    words[i] = wordLetters.reverse().join('');
  }

  return words.join(' ');
}

// Test code
const originalString = "This is a test sentence";
const reversedWordsString = reverseWords(originalString);
console.log(reversedWordsString); // Output: "sihT si a tset ecnetnes"
