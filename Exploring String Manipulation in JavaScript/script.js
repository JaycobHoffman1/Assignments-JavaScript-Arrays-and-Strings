// Task 1: Obtaining String Length - Create a string with some text content. - Use the `length` property to obtain the length of the string.
const message = "Hello, World!";
messageLength = message.length;
console.log(`Length of string "${message}": ${messageLength}`);

// Task 2: Converting Cases - Create a string with mixed-case content. - Use the `toUpperCase` method to convert the string to uppercase. - Use the `toLowerCase` method to convert the string to lowercase.
const text = "Hello, World!";
console.log(`Original string: "${text}"`);
const textUpperCase = text.toUpperCase();
console.log(`Converted to all uppercase: "${textUpperCase}"`);
const textLowerCase = text.toLowerCase();
console.log(`Converted to all lowercase: "${textLowerCase}"`);

// Task 3: Extracting Substrings - Create a string with some text content. - Use the `substring` method to extract a substring from the original string.
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(`Original string: "${sentence}"`);
sentenceSubstring = sentence.substring(0, 25);
console.log(`Substring: "${sentenceSubstring}"`);

// Task 4: Splitting Strings - Create a string containing multiple words separated by spaces. - Use the `split` method to split the string into an array of words based on the space delimiter.
sentence = "The quick brown fox";
console.log(`Original string: "${sentence}"`);
splitString = sentence.split(" ");
console.log("Split string:", splitString);