// # Challenge 2

// Implement a function fizzBuzz(input) that takes a number and retuns:
// "fizz": if the number is divisible by 3
// "buzz": if the number is divisible by 5
// "fizzbuzz": if the number is both divisible by 3 and 5
// number: if it is not divisible by 3 or 5


// # Example
//     fizzBuzz(3) to return "fizz" 
//     fizzBuzz(5) to return "buzz" 
//     fizzBuzz(15) to return "fizz" 
//     fizzBuzz(7) to return 7 
//     filterArray([4, "z", "f", 5]) to return [4,5]
//     filterArray(["$%^", 567, "&&&"]) to return [567]


function fizzBuzz(input){
  let result;
if (input % 3 === 0 && input % 5 === 0) {
  result = 'fizzBuzz';
} else if (input % 3 === 0) {
  result = 'fizz';
} else if (input % 5 === 0) {
  result = 'buzz';
} else {
  result = input;
}
return result;


}


console.log(fizzBuzz());

module.exports = fizzBuzz
