/*
Task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.


*/


function combine(...objects) {
  // Initialize an empty result object
  const result = {};

  // Loop through each input object
  for (const obj of objects) {
    // Loop through the properties of the current object
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // If the key already exists in the result object, add the values together
        if (result.hasOwnProperty(key)) {
          result[key] += obj[key];
        } else {
          // Otherwise, create a new key in the result object with the current value
          result[key] = obj[key];
        }
      }
    }
  }

  return result;
}

// Example usage:
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { b: 5, d: 10 };

const combinedObj = combine(objA, objB, objC);
console.log(combinedObj); // Output: { a: 13, b: 25, c: 36, d: 13 }
