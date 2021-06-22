// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
  console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
  strings.join(" ");
 
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ");
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
strings.includes('is');
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf('is');
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(elem => elem % 3 === 0);
// -  Sort Array from smallest to largest

// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
 let a = 0;
 numbers.forEach(elem => elem > a ? a = elem : elem = elem);
 console.log(a);
// - Find longest string in strings
let b =0;
strings.forEach(elem => elem.length > b ? b = elem.length :elem.length =elem.length);
console.log(b);
// - Find all the even numbers
numbers.filter(elem => elem % 2 === 0);
// - Find all the odd numbers
numbers.filter(elem => elem % 2 !== 0);
// - Place a new word at the start of the array use (unshift)
strings.unshift("hello");
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,8);
// - Make a subset of strings array ['a','collection']
strings.slice(1,3);
// - Replace 12 & 18 with 1221 and 1881
numbers[3] = 1221;
numbers[4] = 1881;
// - Replace words in strings array with the length of the word
let c = strings.splice(4,1,"length of the word");
// - Find the sum of the length of words using above question
let len =strings.reduce((acc,elem) => {
  return acc + elem.length
},0)
console.log(len);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.filter(elem => elem.firstname.charAt(0) === "J")
// - Create new array with only first name
customers.map(elem => elem.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
let sort = customers.map(elem => elem.firstname +" "+ elem.lastname);
// - Sort the array created above alphabetically
console.log(sort.sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
sort.filter(elem => elem.includes('a') || elem.includes('e') || elem.includes('i') || elem.includes('o') || elem.includes('u'))