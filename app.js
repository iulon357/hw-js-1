//homeWork
let peppersNumber = 23; //number
let goldWeight = 0.05; //fraction
let petName = "bob"; //string
let isDoctor = false; //boolean
let isTeacher = true; //boolean
let myReservation = undefined; //undefined

const myName = "iulon";
const myHobby = "powerlifting";
const yearOfBirth = 1988;
const currentYear = 2023;
const myAge = currentYear - yearOfBirth;

//v1
console.log ("My name is " + myName + "," + " I am " +(currentYear-yearOfBirth)+ " years old and my hobby is " + myHobby + ".");

//v2
console.log ("My name is " + myName + "," + " I am " + myAge + " years old and my hobby is " + myHobby + ".");

//v3
console.log (`My name is ${myName}, I am ${currentYear - yearOfBirth} years old and my hobby is ${myHobby}.`);

//v4
console.log (`My name is ${myName}, I am ${myAge} years old and my hobby is ${myHobby}.`);

//example
console.log (peppersNumber, goldWeight, petName, isDoctor, isTeacher, myReservation);
console.log (typeof peppersNumber, typeof goldWeight, typeof petName, typeof isDoctor, typeof isTeacher, typeof myReservation);

