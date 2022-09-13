// Implement the function calculateGrade(marks) that takes an array of grades and calculates the average. It should return the average grade by comparing with the grade table
// 1-49: F
// 50-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
// # Example
//     calculateGrade([80, 80, 70]) to  return A
//     calculateGrade([19, 5, 42, 2, 77]) to return 'F'
//     calculateGrade([59, 80, 40, 2, 77]) to return 'E'
//     calculateGrade([89, 50, 40, 90, 77]) to return 'D'
    
function calculateGrade(marks) {
  
    let studentGrade;
    for(i=0; i<marks.length; i++) {
        if (marks[i] >= 90) {
          studentGrade = 'A';
        } else if (marks[i] >=80 ) {
          studentGrade = 'B';
        } else if (marks[i] >=70) {
          studentGrade = 'c';
        } else if (marks[i] >=60) {
          studentGrade = 'D';
        } else if (marks[i] >=50) {
          studentGrade = 'E';
        } else {
          studentGrade = 'F';
        }
    }
    return studentGrade;
  }
console.log(calculateGrade([]));


  module.exports =calculateGrade
