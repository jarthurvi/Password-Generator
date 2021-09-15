// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specialchar = ["!","@","#","$","%","&","=","+","-"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  prompt("How Many Characters do you want?");
 confirm("Confirm Use of uppercase letters");
 confirm("Confirm Use of lowercase letters?");
 confirm("Confirm Use of special characters?");
  
 var numberofchar 

  if (numberofchar < 8)  {
    alert("Must be between 8 and 128 characters");
  } else if (numberofchar > 128)  {
    alert("Must be between 8 and 128 characters");
    

  

   
  
 
}
  

  

  
 
  return 'resultofthefunction'; 

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





 