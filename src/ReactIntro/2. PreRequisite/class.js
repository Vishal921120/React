// ES6 introduced classes.
// ES6 stands for ECMAScript 6.
// ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of 
// ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

// A class is a type of function, but instead of using the keyword function to initiate it, 
// we use the keyword class, and the properties are assigned inside a constructor() method.


// simple class

class Car{ // class name should be uppercase always
    constructor(name){
        this.brand = name ;
    }
}

//Now you can create objects using the Car class:
const mycar = new Car("Ford");
//Note: The constructor function is called automatically when the object is initialized.
// To run this file:- First open this file location in termianl and then type Node <filename>.js and 
// then press enter.
console.log(mycar.brand); 

// Methods in Class : we can make our own methods in class
class Car1{
    constructor(name){
        this.brand = name;
    }

    present(){
        return 'i have car name ' + this.brand ;
    }
}

const mycar1 = new Car1("Alto");
console.log(mycar1.present());
