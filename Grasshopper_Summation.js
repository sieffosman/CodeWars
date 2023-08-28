/*Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)*/

var summation = function (num) {
  let sum = 0;
  if (num <= 0) {
    return 'You must enter a number greater than 0.';
  }
  else {
    for (let i = 0; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
}

//Tests;
summation(1); //1
summation(2); //3
summation(8); //36

