// IMPORTANT :- In below code i have knowingly changed the names of variables which are incorrect to 
// avoid the redeclartion of a variable. 

// Destructuring
// To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator 
// to make your sandwich? No, you only take out the items you would like to use on your sandwich.

// Destructuring is exactly the same. We may have an array or object that we are working with,
//  but we only need some of the items contained in these.

// Destructuring makes it easy to extract only what is needed.

// Destructing Arrays
// Here is the old way of assigning array items to a variable:

// ExampleGet your own React.js Server
// Before:

const vehicle = ['mustang', 'f-150', 'expedition'];

// old way
const cars = vehicles[0];
const truck = vehicles[1];
const suvs = vehicles[2];

// Here is the new way of assigning array items to a variable:
// Example
// With destructuring:

const vehicless = ['mustang', 'f-150', 'expedition'];
const [carr, truckk, suvv] = vehicles;

// When destructuring arrays, the order that variables are declared is important.
// If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles = ['mustang', 'f-150', 'expedition'];
const [car,, suv] = vehicles;


// Destructuring comes in handy when a function returns an array:
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

// with destructuring
const [add, subtract, multiply, divide] = calculate(4, 7);
// without destructuring
// const result = calculate(4, 7);
// const add = result[0];
// const subtract = result[1];
// const multiply = result[2];
// const divide = result[3];


// Destructuring Objects
// Here is the old way of using an object inside a function:

// Example
// Before:

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}

// Here is the new way of using an object inside a function:
// Example
// With destructuring:

const vehicleOn = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}
// Notice that the object properties do not have to be declared in a specific order.

// We can even destructure deeply nested objects by referencing the nested object 
// then using a colon and curly braces to again destructure the items needed from the nested object:

// Example
const vehicleOnee = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}