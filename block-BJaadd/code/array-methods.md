Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   -Parameter:Parameter is optional in join,we can pass seperator as a string.
   - Return : It's return a string with all array element.
   - Example:
   ```js
   let numbers = [1, 2, 3];
   numbers.join(); //"1,2,3"
   numbers.join(" "); //"1 2 3"
   numbers.join(0); //"10203"
   ```
   - `join` join method create and return a new string of respected array.
   - No it does not mutate the original array
3. `flat`
   -Parameter:Parameter is optional in flat,we can pass number or infinity as a parameter.
   - Return : It's return a array by concating all sub-array.
   - Example:
   ```js
   let arr = [1, 2, [3, 4, [5, 6]]];
   arr.flat(2); // [1,2,3,4,5,6];
   arr.flat(); //[1,2,3,4,Array(2)];
   arr.push(7);
   arr.flat(Infinity);
   [1, 2, 3, 4, 5, 6, 7];
   ```
   - `flat` flat return new array by combining all sub array.
   - No it does not mutate the original array.
4. `push`
   -Parameter:It's accept one or more array elements.
   - Return : It's return a length of Array.
   - Example:
   ```js
   let arr = [1, 2, 3, 4];
   arr.push(5, 6, 7); //4
   arr.push("push", "pop"); //6
   ```
   - `push` - It's accept one or more array elements and return a length of array.
   - yes,it mutate the original array.
5. `indexOf`
   -Parameter:It's accept array element to search.
   - Return : It's return first index value of element,if search element is not exist in array,it's return -1;
   - Example:
   ```js
   const beasts = ["ant", "bison", "camel", "duck", "bison"];
   beasts.indexOf("bison") !== -1; //true
   beasts.indexOf("camel") !== -1; //true
   beasts.indexOf("dog") !== -1; //false
   ```
   - `indexOf` Its accept array of element to search and if search element found it return index value of that element.
   - No it does not mutate the original array.
6. `lastIndexOf`
   -Parameter:It's accept array element to search.
   - Return : It's return last index value of element,if search element is not exist in array,it's return -1;
   - Example:
   ```js
   const beasts = ["ant", "bison", "camel", "duck", "bison"];
   beasts.lastIndexOf("bison") !== -1; //true
   beasts.lastIndexOf("camel") !== -1; //true
   beasts.lastIndexOf("dog") !== -1; //false
   ```
   - `lastIndexOf` Its accept array of element to search and if search element found it return index value of that element.
   - No it does not mutate the original array.
7. `includes`
   -Parameter:It's accept array element to search.
   - Return : It's return boolean value.
     - Example:
   ```js
   const beasts = ["ant", "bison", "camel", "duck", "bison"];
   beasts.includes("bison"); //true
   beasts.includes("camel"); //true
   beasts.includes("dog"); //false
   ```
   - `includes` Its accept array of element to search and if search element found it return true else false.
   - No it does not mutate the original array.
8. `reverse`
   -Parameter:It do not accept any parameter.
   - Return : It's return reverse array.
   - Example:
   ```js
   const beasts = ["ant", "bison", "camel", "duck", "bison"];
   beasts.reverse(); //["bison", "duck", "camel", "bison", "ant"]
   ```
   - `reverse` It do not accept any parameter and return new array.
   - Yes,it mutate the original array.
9. `every`
   -Parameter:It accept callback function
   - Return : It's return boolean value.
   - Example:
   ```js
   const beasts = ["ant", "bison", "camel", "duck", "bison"];
   beasts.every((num) => (num.lenght >= 3 ? true : false)); //true
   beasts.every((num) => (num.lenght > 4 ? true : false)); //false
   ```
   -`every` It accept callback function and return boolean value.
   - No it does not mutate the original array.
10. `shift`
    -Parameter:It do not accept any parameter.
    - Return : It's return first index of item from array,that is removed.
    - Example:

```js
const beasts = ["ant", "bison", "camel", "duck", "bison"];
beasts.shift(); // "ant";
```

`shift` It do not accept any parameter and return first index of item from array,that is removed.

- Yes,it mutate the original array.

11. `splice`
    -Parameter:It accept three parameter,first one is index number,second one is how many item to be deleted,and third is optional,it takes new item to add on array.

- Return : It's return deleted element.
- Example:

```js
const beasts = ["ant", "bison", "camel", "duck", "bison"];
beasts.splice(0, 1);
["ant"];
beast.splice(0, 1, "dog");
["bison"];
beast.splice(1, 0, "ant");
[];
```

-`splice` It accept three parameter and return a array.

- Yes,it mutate the original array.

12. `find`
    -Parameter:It accept callback function

- Return : It's return the array of item,if condition is satisfied else return undefined.
  - Example:

```js
const beasts = ["ant", "bison", "camel", "duck", "bison"];
let a = beasts.find((num) => num.lenght >= 3);
console.log(a); // "ant"
let b = beasts.find((num) => num.lenght > 4);
console.log(b); // "bison"
```

-`find` It accept callback function and return the array of item.

- No it does not mutate the original array.

13. `unshift`
    -Parameter:It's accept one or more array elements.

- Return : It's return a new length of Array.
  - Example:
  ```js
  const beasts = ["ant", "bison", "camel", "duck", "bison"];
  beasts.unshift("ostrich"); // 6
  ```
  - `unshift` It's accept one or more array elements and return a new length of Array.
    - Yes,it mutate the original array.

14. `findIndex`
    -Parameter:It accept callback function

- Return : It's return index number of array,if condition is satisfied else return -1.
- Example:

```js
const beasts = ["ant", "bison", "camel", "duck", "bison"];
beasts.findIndex((num) => num.length >= 3); // 0
beasts.findIndex((num) => num.length > 4); // 1
```

-`findIndex` It accept callback function and return index number of array.

- No it does not mutate the original array.

15. `filter`
    -Parameter:It accept callback function
    - Return : It's return new array,if condition is satisfied else return empty array.
    - Example:

````js
const beasts = ["ant", "bison", "camel", "duck", "bison"];
let newArray = beasts.filter(word => word.lenght > 4);
```
 -`filter` It accept callback function and return new array.
 - No it does not mutate the original array.
16. `flat`
    -Parameter:Parameter is optional in flat,we can pass number or infinity as a parameter.
- Return : It's return a array by concating all sub-array.
- Example:

```js
let arr = [1, 2, [3, 4, [5, 6]]];
arr.flat(2); // [1,2,3,4,5,6];
arr.flat(); //[1,2,3,4,Array(2)];
arr.push(7);
arr.flat(Infinity);
[1, 2, 3, 4, 5, 6, 7];
````

- `flat` flat return new array by combining all sub array.
- No it does not mutate the original array.

17. `forEach`
    -Parameter:It accept callback function
    - Return : It's return undefined.
    - Example:

```js
const beasts = ["ant", "bison", "camel", "duck", "bison"];
beasts.forEach((element) => console.log(element));
```

- `forEach` It accept callback function and return undefined.
- No it does not mutate the original array.

18. `map`
    -Parameter:It accept callback function
    - Return : It's return new array with the result of callback function.
      -Example:
    ```js
    let arr2 = [1, 2, 3, 4, 5];
    arr2.map((elem) => elem * 2); //[2,4,6,8,10];
    arr2.map((elem) => elem + 1); // [2, 3, 4, 5, 6]
    arr2.map((elem) => elem + " "); // ["1", "2", "3", "4", "5"]
    ```
    - `map` It accept callback function and return new array.
    - No it does not mutate the original array.
19. `pop`
    -Parameter:It do not accept any parameter.
    - Return : It's return length of array
      -Example:
    ```js
    let arr2 = [1, 2, 3, 4, 5];
    arr2.pop(); // 5
    ```
    -`pop` It do not accept any parameter and return length of array.
    - Yes,it mutate the original array.
20. `reduce`
    -Parameter:It accept two parameter,callback function and initial value.
    - Return : It's return single value of any type.
      -Example:
    ```js
    let arr2 = [1, 2, 3, 4, 5];
    arr2.reduce((acc, num) => {
      return acc + num;
    }, 0); // 15;
    ```
    - `reduce` It accept callback function and return single value.
    - No it does not mutate the original array.
21. `slice`
    -Parameter:It accept two number,both are index value of array.

    - Return : It's return new array.
      -Example:

    ```js
    const animals = ["ant", "bison", "camel", "duck", "elephant"];
    console.log(animals.slice(2)); //["camel", "duck", "elephant"];
    console.log(animals.slice(0, 2)); //["ant", "bison"];
    ```

- `slice` It accept two number,both are index value of array and return new array.
- No it does not mutate the original array.

22. `some`
    -Parameter:It accept callback function
    - Return : It's return boolean value.
    - Example:

```js
const beasts = ["ant", "bison", "camel", "duck", "bison"];
beasts.some((num) => num.lenght >= 3); //true
beasts.some((num) => num.lenght > 4); //true
let a = [2, 3, 5, 6, 8];
a.some((elem) => elem % 2 === 0); //true
```

-`some` It accept callback function and return boolean value. - No it does not mutate the original array.
