// Spread Operator
// The JavaScript spread operator (...) allows us to quickly copy all or part of an 
// existing array or object into another array or object.

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

// The spread operator is often used in combination with destructuring.

// Example
// Assign the first and second items from numbers to variables and put the rest in an array:

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

// We can use the spread operator with objects too:

// Example
// Combine these two objects:

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle);
// {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'yellow',
//     type: 'car',
//     year: 2021
//   }

// Notice the properties that did not match were combined, but the property that did match,
//  color, was overwritten by the last object that was passed, updateMyVehicle.
// The resulting color is now yellow