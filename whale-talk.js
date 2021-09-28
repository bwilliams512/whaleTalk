/*
This is a fun program that converts text to whale language.
The result is sung slowly, as is custom in the ocean.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we double them in this program.
*/

// Enter phrase with the text you want to translate into "whale talk"
const input = 'everything is possible'

// Need an array of vowels to be extracted from the input variable
const vowels = ['a', 'e', 'i', 'o', 'u']

// Need a place to store the vowels from the input string
const resultArray = []

// Create a loop to iterate through each letter of the input variable text
for (let i = 0; i < input.length; i++) {
  // Uncomment the code below to check if this loop counts the number of characters in the 'input' string
  // console.log(input[i]);

  // Create a nested for loop to check each letter of input against all the vowels
  for (let j = 0; j < vowels.length; j++) {
    // console.log('j is ' + j);
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    }
  }
  // Whales double theie e's and the u's in their language
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i])
  }
}

// Uncomment code below to see array with cammas between each letter
// console.log(resultArray);

// Capitalize the array elements and put them together as one string tp produce proper whale language
console.log(resultArray.join('').toUpperCase())
