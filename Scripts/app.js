// main javascrip document

"use strict";

var username = "Helen";
var age = 23;

var usernames = [];


/*
usernames = ["Mike", "Rich", "Anju"];
// var usernames = new Array();

//usernames[0] = "Mike";
console.log(usernames);

usernames.push("Tom");
*/


// Initialize the array with values
usernames = ["Mike", "Rich", "Anju", "Margot"];
console.log("before the push: " + usernames);

//add an element to the bottom of the array
usernames.push("Tom");
console.log("after the push: " + usernames);

//remove an element from the bottom of the array
usernames.pop();
console.log("after the pop: " + usernames);
