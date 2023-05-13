// before
hello = function(){
    return "hello world";
}

// after
hello = () => {
    return "hello world";
}

// It gets shorter! If the function has only one statement, 
//and the statement returns a value, you can remove the brackets and the return keyword:

// Arrow functions return value by default

hello = () => "hello world";

// If you have parameters, you pass them inside the parentheses:
hello = (val) => "Hello " + val;

// In fact, if you have only one parameter, you can skip the parentheses as well:
hello = val => "Hello " + val;

// What About this?
// The handling of this is also different in arrow functions compared to regular functions.

// In short, with arrow functions there is no binding of this.

// In regular functions the this keyword represented the object that called the function, 
// which could be the window, the document, a button or whatever.

// With arrow functions, the this keyword always represents the object that defined the arrow function.

// Let us take a look at two examples to understand the difference.

// Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

// The first example uses a regular function, and the second example uses an arrow function.

// The result shows that the first example returns two different objects (window and button), 
// and the second example returns the Header object twice.

// Example using a regular function
const obj = {
    name: 'John',
    greet: function() {
      console.log(`Hello ${this.name}`);
    }
  };
  
  window.onload = function() {
    obj.greet(); // output: "Hello John"
    
    const button = document.querySelector('button');
    button.addEventListener('click', obj.greet); // output: "Hello undefined"
};
// In this example, we have an object obj with a greet method that logs a greeting with the 
// object's name property. When the page loads, we call the greet method on obj and 
// it logs "Hello John" to the console.

// Next, we add an event listener to a button on the page that calls the greet method when 
// the button is clicked. However, when the button is clicked and the greet method is called, 
// this inside the method refers to the button element, not obj, so this.name is undefined.

// Now, let's look at the same example using an arrow function:

const obj2 = {
    name: 'John',
    greet: () => {
      console.log(`Hello ${this.name}`);
    }
  };
  
  window.onload = function() {
    obj2.greet(); // output: "Hello undefined"
    
    const button = document.querySelector('button');
    button.addEventListener('click', obj2.greet); // output: "Hello undefined"
  };

//   In this example, we have the same object obj with a greet method, 
//   but this time we define it as an arrow function. When the page loads and we call obj.greet(), 
//   it logs "Hello undefined" because this inside the arrow function refers to the global window object, 
//   not obj.

//   Similarly, when we add an event listener to the button and call obj.greet, 
//   this still refers to the global window object, so we get the same output of "Hello undefined" when 
//   the button is clicked.
  
//   So, in summary, arrow functions do not have their own this binding, 
//   so the this keyword inside an arrow function refers to the this value of the enclosing lexical scope.
//    In contrast, regular functions have their own this binding, so the this keyword 
//    inside a regular function refers to the object that called the function.

const obj3 = {
    name: 'John',
    outerFunc: function() {
      const innerFunc = () => {
        console.log(`Hello ${this.name}`);
      }
      innerFunc();
    }
  };
  
  obj3.outerFunc(); // output: "Hello John"

//   In this example, we have an object obj with a method outerFunc that defines an inner arrow function 
//   innerFunc. Inside innerFunc, we log a greeting with the object's name property using the this 
//   keyword.

//   When we call obj.outerFunc(), it executes the outer function which then calls innerFunc. 
//   Even though innerFunc is an arrow function, it still has access to the this value of 
//   the enclosing lexical scope, which in this case is the obj object. Therefore, 
//   when we call innerFunc(), it logs "Hello John" to the console, using the name property 
//   of the obj object.
  
//   So, the this keyword inside an arrow function refers to the this value of the
//    enclosing lexical scope, which can be a function, an object, or the global scope 
//    depending on where the arrow function is defined.