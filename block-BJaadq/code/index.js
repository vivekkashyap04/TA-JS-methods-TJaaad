// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  let total = 0;
  for(var i= 0; i< got.houses.length;i++){
      total += got.houses[i].people.length;
  }
  return total;
}

function peopleByHouses() {
  let obj = {};
  for(var i= 0; i< got.houses.length;i++){
    obj[got.houses[i].name] = got.houses[i].people.length;
}
return obj;
}

function everyone() {
  let arr = [] ;
  for(var i= 0; i< got.houses.length;i++){
    for(var j=0; j < got.houses[i].people.length; j++){
      arr.push(got.houses[i].people[j].name);
    }
  }
  return arr;
}

function nameWithS() {
  let arr = [] ;
  for(var i= 0; i< got.houses.length;i++){
    for(var j=0; j < got.houses[i].people.length; j++){
      if(got.houses[i].people[j].name.includes('s')){
        arr.push(got.houses[i].people[j].name);
      }
    }
  }
  return arr;
}

function nameWithA() {
  let arr = [] ;
  for(var i= 0; i< got.houses.length;i++){
    for(var j=0; j < got.houses[i].people.length; j++){
      if(got.houses[i].people[j].name.includes('a')){
        arr.push(got.houses[i].people[j].name);
      }
    }
  }
  return arr;
}

function surnameWithS() {
  let arr = [] ;
  for(var i= 0; i< got.houses.length;i++){
    for(var j=0; j < got.houses[i].people.length; j++){
      let subString = got.houses[i].people[j].name.split(" ");
      if(subString[1].charAt('S') === 'S'){
        arr.push(got.houses[i].people[j].name);
      }
    }
  }
  return arr;
}

function surnameWithA() {
  let arr = [] ;
  for(var i= 0; i< got.houses.length;i++){
    for(var j=0; j < got.houses[i].people.length; j++){
      let subString = got.houses[i].people[j].name.split(" ");
      if(subString[1].charAt('A') === 'A'){
        arr.push(got.houses[i].people[j].name);
      }
    }
  }
  return arr;
}

function peopleNameOfAllHouses() {
  let obj = {};
  for(var i= 0; i< got.houses.length;i++){
    let arr = [] ;
    for(var j=0; j < got.houses[i].people.length; j++){
      obj[got.houses[i].name] = arr;
      arr.push(got.houses[i].people[j].name);
    }
  }
  return obj;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
