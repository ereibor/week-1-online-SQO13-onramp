// # Challenge 5

// Implement the function filterList(arr) that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// # Example
//     filterList([1,2,'a','b']) to return [1,2]
//     filterList([1,'a','b',0,15]) to return [1,0,15]
//     filterList([1,2,'aasf','1','123',123]) to return [1,2,123]



function filterList(arr) {
    let onlyNumbers = []
    for(let i=0; i<arr.length; i++) {
     if (typeof arr[i] === 'number') {
       onlyNumbers.push(arr[i])
     }

    }

    return onlyNumbers;
 }
 console.log(filterList([]));




  module.exports =filterList