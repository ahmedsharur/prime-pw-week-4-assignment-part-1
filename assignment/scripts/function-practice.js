console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Ahmed') )

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber
}
console.log(addNumbers(20, 30));

// 4. Function to multiply three numbers & return the result
function multiplyThree( a, b, c){
return a * b * c
}
console.log(multiplyThree(1, 2, 3));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log( 'isPositive - should say true', isPositive(-15) );
console.log( 'isPositive - should say false', isPositive(100) );



// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`
function getLast( array ) {
  if (array.length > 0){
  		return(array[array.length-1]);
    }
  else {
    return(undefined);
  }
}
console.log(getLast(['Chad', 'Mark', 'Kris']));
console.log(getLast([10, 12, 30, 40, 50]));
console.log(getLast(['a', 'b', 'c', 'd']));
console.log(getLast([]));


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( array, value ){
for(let i = 0; i < array.length; i++){
  if(array[i] === value){
    return true;
  }
}
  return false;
}
console.log(find( ['Chad', 'Mark', 'Kris'], 'Mark'));
console.log(find([11, 33, 45, 20], 20))
console.log(find( ['a', 'b', 'c', 'd'], 'k'))


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

 if (letter === string.charAt(0) ){
   return true;
 }
 else
 return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log( 'isFirstLetter - should say true', isFirstLetter('k', 'kiwi') );
console.log( 'isFirstLetter - should say false', isFirstLetter('w', 'apple') );


// 9. Function to return the sum of all numbers in an array
const arrayList =[1, 2, 3, 4, 5]
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  for(let i = 0; i < arrayList.length; i++){
    sum +=arrayList[i]
  }
  return sum;
}
console.log(sumAll());

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveArr(arr){
  let emptArr = []
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      emptArr.push(arr[i])
    }
  }
  return emptArr
}
console.log(positiveArr([1, 2, -3, 4, 5]))
console.log(positiveArr([-1, -2, -3, -4, -5]))



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Create a function that returns true if an integer is evenly divisible by 5,
//and false otherwise.

function divisibleByFive(num) {
  /*The condition tests if number is divisible by 5, then returns true or false
  depending on the condition */
	if (num % 5 === 0){
		return true;
	}
	else{
		return false;
	}
}
// logs the result to the console
console.log(divisibleByFive(100));
console.log(divisibleByFive(101));
console.log(divisibleByFive(50));
