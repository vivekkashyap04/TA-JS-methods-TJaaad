let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopelName = persons.map(elem => elem.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(elem => elem.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map(elem => elem.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filteredName = persons.filter(elem => elem.name.startsWith('J') || elem.name.startsWith('P'));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filteredNameAorC = persons.filter(elem => elem.name.startsWith('A') || elem.name.startsWith('C'));
// Log all the filtered male ('M') in persons array
let filteredMale = persons.filter(elem => elem.sex === "M");
// Log all the filtered female ('F') in persons array
let filteredFemale = persons.filter(elem => elem.sex === "F");
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
filteredFemale.filter(elem => elem.name.startsWith('C') || elem.name.startsWith('J'));
// Log all the even numbers from peopleGrade array
peopleGrade.filter(elem => elem % 2 === 0);
// Find the first name that starts with 'J' in persons array and log the object
persons.filter(elem => elem.name.startsWith('J'));
// Find the first name that starts with 'P' in persons array and log the object
persons.filter(elem => elem.name.startsWith('P'));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
persons.filter(elem => elem.name.startsWith('J') && elem.grade > 10 && elem.sex === "F");
// Filter all the female from persons array and store in femalePersons array
let femalePersons =  persons.filter(elem => elem.sex === "F");
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(elem => elem.sex === "M");
// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc,cv) => {
  return acc + cv.grade;
},0)
// Find the average grade
let averageGrade = gradeTotal / peopleGrade.length;
// Find the average grade of male
let maleGrade = malePersons.filter(elem => elem.grade);
let b =malePersons.reduce((acc,cv) => {
  acc = acc + cv.grade;
  return acc;
},0)
b/maleGrade.length;
// Find the average grade of female
let femaleGrade = femalePersons.filter(elem => elem.grade);
let c =femalePersons.reduce((acc,cv) => {
  acc = acc + cv.grade;
  return acc;
},0)
c/femaleGrade;
// Find the highest grade
let highestGrade = peopleGrade.sort((a,b) => a -b).pop();
// Find the highest grade in male
maleGrade.sort((a,b) => a-b).pop();
// Find the highest grade in female
femaleGrade.sort((a,b) => a-b);
// Find the highest grade for people whose name starts with 'J' or 'P'
filteredName.sort((a,b) => a-b).pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b) => a-b);
// Sort the peopleGrade in descending order
peopleGrade.sort((a,b) => b-a);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a,b) => b-a);
// Sort the array peopelName in ascending `ABCD..Za....z`
peopelName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopelName].sort();