let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(word){
  return [...word].sort((a,b) => a.length - b.length).pop();
}
// - Convert the above array "words" into an array of length of word instead of word.
let wordsLength = words.map(elem => elem.length);
// - Create a new array that only contains word with atleast one vowel.
words.filter(elem => {
  if(elem.toLowerCase().includes('a') || elem.toLowerCase().includes('e') || elem.toLowerCase().includes('i') || elem.toLowerCase().includes('o') || elem.toLowerCase().includes('u')){
    return elem;
  }
})
// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.
words.filter(elem => {
  if(elem.charAt(0) !== "a" & elem.charAt(0) !== "e" & elem.charAt(0) !== "i"  & elem.charAt(0) !== "o"  & elem.charAt(0) !== "u" ){
    return elem;
  }
})
// - Create a new array that contianse words not ending with vowel
words.filter(elem => {
  if(!elem.toLowerCase().endsWith('a') & !elem.toLowerCase().endsWith('e') & !elem.toLowerCase().endsWith('i') & !elem.toLowerCase().endsWith('o') & !elem.toLowerCase().endsWith('u') ){
    return elem;
  }
})
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr){
  return  arr.reduce((elem,currentValue) => {
    elem = elem + currentValue;
    return elem;
  })
}
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
numbers.filter(elem => elem % 3 === 0);
// - Create a new array that contains only even numbers
numbers.filter(elem => elem % 2 === 0);
// - Create  a new array that contains only odd numbers.
numbers.filter(elem => elem % 2 !== 0);
// - Create a new array that should have true for even number and false for odd numbers.
numbers.map(elem => elem % 2 !== 0 ? true : false);
// - Sort the above number in assending order.
numbers.sort((a,b) => a-b);
// - Does sort mutate the original array?
yes
// - Find the sum of the numbers in the array.
numbers.reduce((acc,currentValue) => { 
  return acc+ currentValue;
})
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arr){
  let a =0;
  arr.reduce((elem,currentValue) => {
    a = elem + currentValue;
    return a;
  })
  return a/arr.length;
}
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(arr){
    let a= arr.map(elem => elem.length);
    let b =0;
    a.reduce((acc,cv) => {
      b=  acc + cv;
      return b;
    })
    return b/arr.length;
}