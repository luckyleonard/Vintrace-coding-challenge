// Given the URL format below, write a JavaScript function that will accept a URL as a string, and return the username of the URL.

// https://<domainName>/<route>/<username>

// You Answer:

const URL = 'https://<domainName>/<route>/<username>';

function getUsername(params) {
  const arr = params.split('/');
  return arr.reverse()[0];
}
console.log('username:', getUsername(URL));

// A palindrome is a word, sentence or other type of character sequence which reads the same backward as forward. For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes, because they don’t read the same from left to right and from right to left.

// Write a JavaScript function that will accept a string, and return true if the string is a palindrome and false if it isn’t. Include spaces and punctuation in deciding if the string is a palindrome.

const word1 = 'racecar';
const word2 = 'Table';

function isPalindrome(word) {
  return word.split('').reverse().join('') === word;
}

if (isPalindrome(word1)) {
  console.log('it is');
}
