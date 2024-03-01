// EXAMPLE 1 - Replace a Character at a specific Index in a String in JavaScript

function replaceCharacter(string, index, replacement) {
  return (
    string.slice(0, index) +
    replacement +
    str.slice(index + replacement.length)
  );
}

const str = 'bobby';

const result1 = replaceCharacter(str, 2, '_');
console.log(result1); // 👉️ bo_by

const result2 = replaceCharacter(str, 2, '!@');
console.log(result2); // 👉️ bo!@y

// ------------------------------------------------------------------

// // EXAMPLE 2 - Replace multiple characters at a specific Index in a String

// function replaceCharacter(string, index, replacement) {
//   return (
//     string.slice(0, index) +
//     replacement +
//     str.slice(index + replacement.length)
//   );
// }

// const str = 'bobby';
// const index = 2;
// const replacement = '!@';

// // 👇️ bo!@y
// console.log(replaceCharacter(str, index, replacement));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Only replacing a single character at a specific index in a String

// function replaceCharacter(string, index, replacement) {
//   return (
//     string.slice(0, index) + replacement + str.slice(index + 1)
//   );
// }

// const str = 'bobby';
// const index = 2;
// const replacement = '_';

// // 👇️ bo_by
// console.log(replaceCharacter(str, index, replacement));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Getting the index of a substring in a string

// const str = 'bobby';

// console.log(str.indexOf('o')); // 👉️ 1
// console.log(str.indexOf('bb')); // 👉️ 2

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using the length of the replacement string to determine the start index

// function replaceCharacter(string, index, replacement) {
//   return (
//     string.substring(0, index) +
//     replacement +
//     str.substring(index + replacement.length)
//   );
// }

// const str = 'bobby';

// const index = 2;
// const replacement = '%^@';

// // 👇️ bo%^@
// console.log(replaceCharacter(str, index, replacement));

// ------------------------------------------------------------------

// // EXAMPLE 6 - Replace a Character at a specific Index in a String using split()

// function replaceCharacter(string, index, replacement) {
//   const arr = string.split('');

//   arr[index] = replacement;

//   return arr.join('');
// }

// // 👇️ _obby
// console.log(replaceCharacter('bobby', 0, '_'));

// // 👇️ b_bby
// console.log(replaceCharacter('bobby', 1, '_'));

// // 👇️ b!@bby
// console.log(replaceCharacter('bobby', 1, '!@'));
