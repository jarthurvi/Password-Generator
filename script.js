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
  if(upperCase === true){
    console.log("UseUppercase");
  } 

  lowerCase = confirm("Use of lowercase letters?");
  if(lowerCase === true){
    console.log("uselowercase");
  }
  specialchar = confirm("Confirm Use of special characters?");
  if(specialchar === true){
    console.log("usespecialcharacters")
  }
  numeric = confirm ("Confirm use of numbers");
  if(numeric === true){
    console.log("includenumbers");
  }

  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var specialchar = ["!","@","#","$","%","&","=","+","-"]
  var numeric = ["1","2","3","4","5","6","7","8","9"]  

//console.log(upperCase.length)


//upperCase = upperCase.split("");
//lowerCase = lowerCase.split("");
//specialchar = specialchar.split("");
//numeric = numeric.split("");


//var myArray = [upperCase,lowerCase,specialchar,numeric];

// declare empty array
//var randomVal = [];
//var randomVal = upperCase[Math.floor(Math.random() * upperCase.length)]; 
//console.log(upperCase.length)


// loop through myArray and assign random values to myNewArray
//for(var i = 0; i < 27; i++){

  // get random number
  //var randomVal = myArray[Math.floor(Math.random() * myArray.length)];  

  // update new array
  //myNewArray.push(randomVal);

  

// make sure it works!
//console.log(myNewArray);


  }
  
  
return '' 

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





 