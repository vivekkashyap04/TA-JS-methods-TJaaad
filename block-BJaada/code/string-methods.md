Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   -Parameter:It's do not accept any parameter.
   -Return:It's return same string in uppercase.
   -Example:
   ```js
   let name = "vivek";
   name.toUpperCase(); // "VIVEK"
   let hello = "Hello World";
   hello.toUpperCase(); //"HELLO WORLD";
   let houseName = "stark";
   houseNames.toUpperCase(); //"STARK"
   ```
   - `toUpperCase` do not accept any parameter and return uppercase string.
3. `toLowerCase`
   -Parameter:It's do not accept any parameter.
   -Return:It's return same string in lowercase.
   -Example:
   ```js
   let name = "VIVEK";
   name.toLowerCase(); // "vivek"
   let hello = "Hello World";
   hello.toLowerCase(); //"hello world";
   let houseName = "Stark";
   houseNames.toLowerCase(); //"stark"
   ```
   - `toLowerCase` do not accept any parameter and return lowercase string.
4. `trim`
   -Parameter:It's do not accept any parameter.
   -Return:It's return same string by removing whitespace in both end.
   -Example:
   ```js
   let name = "  Vivek  ";
   name.trim(); // "Vivek"
   let hello = "Hello World   ";
   hello.trim(); //"Hello world";
   let houseName = "  Stark  ";
   houseNames.trim(); //"Stark"
   ```
   - `trim` do not accept any parameter and return string by removing whitespace from both side.
5. `trimEnd`
   -Parameter:It's do not accept any parameter.
   -Return:It's return same string by removing whitespace from end of string.
   -Example:
   ```js
   let name = "  Vivek  ";
   name.trimEnd(); // "   Vivek"
   let hello = "Hello World   ";
   hello.trimEnd(); //"Hello world";
   let houseName = "  Stark  ";
   houseNames.trimEnd(); //"   Stark"
   ```
   - `trimEnd` do not accept any parameter and return string by removing whitespace from end of string.
6. `trimStart`
   -Parameter:It's do not accept any parameter.
   -Return:It's return same string by removing whitespace from start of string.
   -Example:
   ```js
   let name = "  Vivek  ";
   name.trimStart(); // "Vivek  "
   let hello = "  Hello World";
   hello.trimStart(); //"Hello world";
   let houseName = "  Stark  ";
   houseNames.trimStart(); //"Stark  "
   ```
   - `trimStart` do not accept any parameter and return string by removing whitespace from start of string.
7. `concat`
   -Parameter:It's do not accept any parameter.
    
8. `endsWith`
9. `includes`
10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
