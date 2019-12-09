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
//

//// includes, startsWith, endsWith
//alert( "Widget".includes("id") ); // true
//alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
//
////The methods str.startsWith and str.endsWith do exactly what they say:
//
// alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
//alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

//console.log(str.concat(n));
//console.log(str.concat(" " , n));
//console.log(str.concat(" and " , n));
//
//var str = "       Hello World!        ";
//alert(str.trim());
//
//var txt = "a,b,c,d,e";   // String
//console.log(txt.split(","));          // Split on commas

//var x = 123;
//x.toString();            // returns 123 from variable x
//(123).toString();        // returns 123 from literal 123
//(100 + 23).toString();   // returns 123 from expression 100 + 23

////Double dots
//console.log(123.toString()) // error
//console.log(123..toString())
//
//// pass base to the toString method



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


