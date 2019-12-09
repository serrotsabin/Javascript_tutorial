// Variables
//var x;
//x = 10;
//
//var y = 10;
//
//var user = 'John', age = 25, message = 'Hello';
//
//var user = 'John', 
//    age = 25, 
//    message = 'Hello';


//var vs let and const

//var x1;
//
//var x1 = 10; 
//
//let x2 = 10;
//
//x2 = 20;
//
//console.log(x1,x2)
//
////this creates an error
//let x2

//const
//const pi = 3.14
//
//pi += 10;
//
//const PI = 3.14

 
//Operators
//let s = "my" + "string";
//alert(s); // mystring
//alert(2 + 2 + '1' ); // "41" and not "221"
//alert( 2 - '1' ); // 1
//alert( '6' / '2' ); // 3

//// No effect on numbers
//let x = 1;
//alert( +x ); // 1
//let y = -2;
//alert( +y ); // -2
//// Converts non-numbers
//alert( +true ); // 1
//alert( +"" );   // 0

//// Increment
//
//let counter = 0;
//counter++;
//++counter;
//alert( counter ); // 2, the lines above did the same
//
//counter = 0;
//alert( ++counter ); // 1
//
//counter = 0;
//alert( counter++ ); // 0

//in operator
//var point = { x:1, y:1 }; // Define an object 
//var hasX = "x" in point; // Evaluates to true 
//var hasY = "y" in point; // Evaluates to true 
//var hasZ = "z" in point; // Evaluates to false
//
//console.log('has x ',hasX)
//console.log('has y ',hasY)
//console.log('has z ',hasZ)



//instance of
//var d = new Date(); // Create a new object with the Date( ) constructor 
//
//console.log(d instanceof Date); // Evaluates to true; d was created with Date( ) 
//console.log(d instanceof Object); // Evaluates to true; all objects are instances of Object 
//console.log(d instanceof Number); // Evaluates to false; d is not a Number 
//
//var a = [1, 2, 3]; // Create an array with array literal syntax
//console.log(a instanceof Array); // Evaluates to true; a is an array 
//console.log(a instanceof Object); // Evaluates to true; all arrays are objects 
//console.log(a instanceof RegExp); // Evaluates to false; arrays are not regular expressions

//type of

//let num = 8;
//let num2 = '8';
//let obj = {
//    x: 10,
//    y: 20,
//};
//let arr = [ 1, 2, 3];
//let z;
//
//let a = obj.x < obj.y
//
//let b = null;
//
//console.log('num ', typeof num)
//console.log('num2 ', typeof num2)
//console.log('obj ', typeof obj)
//console.log('arr ', typeof arr)
//console.log('z ', typeof z)
//console.log('a ', typeof a)
//console.log('v ', typeof b)

//// Functions
//function showMessage() {
//  alert( 'Hello everyone!' );
//}
//showMessage();
//showMessage();
//
//
//function showMessage(from, text) { // arguments: from, text
//  alert(from + ': ' + text);
//}
//showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
//showMessage('Ann', "What's up?"); // Ann: What's up? (**)

//function showMessage(from, text = "no text given") {
//  alert( from + ": " + text );
//}
//
//showMessage("Ann"); // Ann: no text given
//showMessage("Ann", "Hello there!")

////alert, prompt, confirm
//alert('Hi')
//
//alert(confirm("Are you sure you want to continue?"))
//
//alert (prompt("Your Text"))

//// Conditional Operator
//let year = prompt('In which year was ECMAScript6 specification published?', '');
//
//if (year == 2015) {
//        alert( 'You are right!' )
//    }
//else {
//    alert( 'You are Wrong!' )    
//}

//year == 2015 ? alert('Correct') : alert('Incorrect')


