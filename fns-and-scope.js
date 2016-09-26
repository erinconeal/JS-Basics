//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
  if (name === 'Tyler') {
    return true;
  }
  else {
    return false;
  }
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
  var name = prompt("What's your name?");
  return name;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  var name = getName();
  alert("Welcome, " + name);
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Parameter: something that is given to a function declaration, definition, or prototype
  // Argument: something that is passed when calling the function.

// For example:
//
// a and b below would be considered parameters.
//
// function something(a, b) {     ... }
//
// and "hello" and 10 would be considered arguments.
//
// something("hello", 10);


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //1. False, 2. NaN, 3. null, 4. undefined, 5. 0, 6. ""



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(name) {
  name = "erin";
  return name;
}



//Now save the function definition of myName into a new variable called newMyName

function newMyName() {

}
//Now alert the result of invoking newMyName
alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
  return function() {
    return "Erin";
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = outerFn();

//Now invoke innerFn.
innerFn();
