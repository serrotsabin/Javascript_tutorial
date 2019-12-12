////function expression
//var sayHi = function() {
//  alert( "Hello" );
//};
//
//sayHi();

//// function declaration
//function sayHi() {
//  alert( "Hello" );
//}

//let func = sayHi;    // (2) copy
//func(); // Hello     // (3) run the copy (it works)!
//sayHi(); // Hello    //     this still works too (why wouldn't it)


//function ask(question, yes, no) {
//  if (confirm(question)) yes()
//  else no();
//}
//
//function showOk() {
//  alert( "You agreed." );
//}
//
//function showCancel() {
//  alert( "You canceled the execution." );
//}
//
//// usage: functions showOk, showCancel are passed as arguments to ask
//ask("Do you agree?", showOk, showCancel);


//declaration vs expression
// sayHi("John"); // Hello, John
//
//function sayHi(name) {
//  alert( `Hello, ${name}` );
//}

//sayHi("John"); // error!
//let sayHi = function(name) {  // (*) no magic any more
//  alert( `Hello, ${name}` );
//};

//let age = prompt("What is your age?", 18);
//let welcome;
//// conditionally declare a function
//if (age < 18) {
//  function welcome() {
//    alert("Hello!");
//  }
//} else {
//  function welcome() {
//    alert("Greetings!");
//  }
//}
//welcome();

////Arrow functions
//let sum = a => a * 2
//
//alert( sum(2) ); 


//let str = `Hello`;
//// the first character
//alert( str[0] ); // H
//alert( str.charAt(0) ); // H
//// the last character
//alert( str[str.length - 1] ); // o


////String Methods
//var str = "Please locate where 'locate' occurs!";
//var pos1 = str.indexOf("locate");
//var pos2 = str.lastIndexOf("locate");
//
//console.log(pos1,pos2)
//console.log(str.length)
//// length is a property not a method.

//var str = "Apple, Banana, Kiwi";
//var res = str.slice(7, 13);
//console.log(res);
//var str = "Apple, Banana, Kiwi";
//var res = str.substr(7, 6);
//console.log(res);
//str = "Please visit Microsoft!";
//var n = str.replace("Microsoft", "Google");
//console.log(n);
//var n = str.replace("microsoft", "Google");
//console.log(n);
//var n = str.replace(/microsoft/i, "Google");
//console.log(n);
//str = "Please visit Microsoft and MICROSOFT";
//var n = str.replace(/microsoft/ig, "Google");
//console.log(n);
//
//console.log(str.toLocaleUpperCase());
//console.log(str.toLocaleLowerCase());


// includes, startsWith, endsWith
//alert( "Widget".includes("id") ); // true
//alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
////
//////The methods str.startsWith and str.endsWith do exactly what they say:
////
//// alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
////alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"
//
//console.log(str.concat(n));
//console.log(str.concat(" " , n));
//console.log(str.concat(" and " , n));
//
//var str = "       Hello World!        ";
//alert(str.trim());
////
//var txt = "google";   // String
//console.log(txt.split('g'));          // Split on commas

//var x = 123;
//x.toString();            // returns 123 from variable x
//(123).toString();        // returns 123 from literal 123
//(100 + 23).toString();   // returns 123 from expression 100 + 23

////Double dots
//console.log(123.toString()) // error
//console.log(123..toString())
//
//// pass base to the toString method

//Math.floor
//Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
//Math.ceil
//Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
//Math.round
//Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4 and -1.1 becomes -1.

//var x = 9.656;
//x.toFixed(0);           // returns 10
//x.toFixed(2);           // returns 9.66

//Number(true);          // returns 1
//Number(false);         // returns 0
//Number("10");          // returns 10
//Number("  10");        // returns 10
//Number("10  ");        // returns 10
//Number(" 10  ");       // returns 10
//Number("10.33");       // returns 10.33
//Number("10,33");       // returns NaN
//Number("10 33");       // returns NaN
//Number("John");        // returns NaN

//parseInt("10");         // returns 10
//parseInt("10.33");      // returns 10
//parseInt("10 20 30");   // returns 10
//parseInt("10 years");   // returns 10
//parseInt("years 10");   // returns NaN 


//Array Methods.

//var cars = ["Saab", "Volvo", "BMW"];
//
//console.log(cars)
//
//cars[1] = 'Opel'
//
//console.log(cars)
//
//var element = document.getElementById("demo");
//element.innerHTML = cars

//error and no error.

//var x = cars.length;   // The length property returns the number of elements
//var y = cars.sort();   // The sort() method sorts arrays
//
//console.log(x,y)

//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.push("Lemon");    // adds a new element (Lemon) to fruits
//console.log(fruits)
//fruits[fruits.length] = "Lemon"; 
//console.log(fruits)
//
//var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)
//console.log(points)
//
////What if I remove one of the elements?
//
//var points = new Array(40);  // Creates an array with 40 undefined elements !!!!!
//console.log(points)

//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//document.getElementById("demo").innerHTML = fruits.toString();
//
//document.getElementById("demo").innerHTML = fruits.join(" * ");
//
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.pop();              // Removes the last element ("Mango") from fruits
//console.log(fruits)
//fruits.push("Kiwi");
//console.log(fruits)
//fruits.shift();
//console.log(fruits)
//fruits.unshift("Mango");
//console.log(fruits)
//delete fruits[0];  
//console.log(fruits)


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 2, "Lemon", "Kiwi");
console.log(fruits);
//
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(0, 1);
//console.log(fruits);
//
//var arr1 = ["Cecilie", "Lone"];
//var arr2 = ["Emil", "Tobias", "Linus"];
//var arr3 = ["Robin", "Morgan"];
//var arr4 = arr1.concat(arr2, arr3);
//console.log(arr4);
//
//var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//var citrus = fruits.slice(3);
//console.log(citrus);
//
//var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//var citrus = fruits.slice(1, 3);
//console.log(citrus);
//
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.sort();        // First sort the elements of fruits
//console.log(fruits);
//fruits.reverse();     // Then reverse the order of the elements
//console.log(fruits);

//var points = [40, 100, 1, 5, 25, 10];
//points.sort()
//console.log(points)
//
//points.sort(function(a, b){return a - b});
//console.log(points)
//
//var points = [40, 100, 1, 5, 25, 10];
//points.sort((a,b)=>a-b);
//console.log(points)

//var array = [8, 9, 1, 2, 3, 4];
//console.log(JSON.stringify(array));
//array.sort(function (a, b) {
//    console.log(a , b, JSON.stringify(array));
//    return a - b;
//});
//console.log(JSON.stringify(array));
//
//var cars = [
//  {type:"Volvo", year:2016},
//  {type:"Saab", year:2001},
//  {type:"BMW", year:2010}
//];
////
////cars.sort(function(a, b){return a.year - b.year});
////console.log(cars)
//
//cars.sort(function(a, b){
//    if(a.type > b.type){
//        return 1;
//    }else{
//        return -1
//    }
//});
//console.log(cars)

//Iteration
//var txt = "";
//var numbers = [45, 4, 9, 16, 25];
//numbers.forEach(myFunction);
//
//function myFunction(value, index, array) {
//  txt = txt + value + "<br>";
//}
//
//document.getElementById('demo').innerHTML = txt


//var numbers1 = [45, 4, 9, 16, 25];
//var numbers2 = numbers1.map(myFunction);
//
//function myFunction(value, index, array) {
//  return value * 2;
//}
//
//console.log(numbers2)

//var numbers = [45, 4, 9, 16, 25];
//var over18 = numbers.filter(myFunction);
//
//function myFunction(value, index, array) {
//  return value > 18;
//}
//console.log(over18)

//var numbers1 = [45, 4, 9, 16, 25];
//var sum = numbers1.reduce(myFunction);
//
//function myFunction(total, value, index, array) {
//  return total + value;
//}
//console.log(sum)

//var numbers = [45, 4, 9, 16, 25];
//var allOver18 = numbers.every(myFunction);
//
//function myFunction(value, index, array) {
//  return value > 18;
//}
//console.log(allOver18)
//
//console.log(numbers.some(myFunction))

//indexOf() lastIndexOf()

//find()

//var numbers = [4, 9, 16, 25, 29];
//var first = numbers.find(myFunction);
//
//function myFunction(value, index, array) {
//  return value > 18;
//}
//console.log(first)

// findIndex()


//Dates
//console.log(new Date())
//console.log(new Date().toDateString())
//console.log(new Date().toISOString())
//console.log(new Date().toUTCString())
//
//console.log(new Date(2018, 11, 24, 10, 33, 30, 0))
//
//var x = new Date()
//console.log(x.getFullYear())
//console.log(x.getMonth())
//
//x.setFullYear(2020)
//console.log(x.toDateString())