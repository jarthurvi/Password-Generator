// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  numberofchar = prompt("How Many Characters do you want?");
  if(numberofchar <= 8 || numberofchar >= 128){
  alert("Must be between 8 and 128 characters")
  } else{
  upperCase = confirm("Confirm Use of uppercase letters");
  lowerCase = confirm("Use of lowercase letters?");
  specialchar = confirm("Confirm Use of special characters?");
  numeric = confirm ("Confirm use of numbers");

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var specialchar = '!@#$%&=+-'
var numeric = '123456789'

upperCase = upperCase.split("");
lowerCase = lowerCase.split("");
specialchar = specialchar.split("");
numeric = numeric.split("");

var myArray = [upperCase,lowerCase,specialchar,numeric];

// declare empty array
var myNewArray = [];

// loop through myArray and assign random values to myNewArray
for(var i = 0; i < 5; i++){

  // get random number
  var randomVal = myArray[Math.floor(Math.random() * myArray.length)];  

  // update new array
  myNewArray.push(randomVal);

}

// make sure it works!
console.log(myNewArray);


  }
  
  
return '' 

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





 