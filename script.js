// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUV";
  var lowerCase = "abcdefghijklmnopqrstuv";
  var specialchar = "!@#$%^&*=-+";
  var numbers = "123456789";
  var bulkPass = "";
  var finalPass = "";
  
  var passLength = prompt("Password should be between 8 to 128 characters! How long you want your password to be?");
  
  var lowerletters = confirm("Confirm use of lowercase letters?");
  if (lowerletters){
     bulkPass += lowerCase;
     
  };
  var upperletters = confirm("Confirm use of uppercase letters?");
  if (upperletters){
    bulkPass += upperCase;
  };
  var numBers = confirm("Confirm the use of Numbers?");  
  if (numBers) {
    bulkPass += numbers;
    
  };
  var specialChar = confirm("Confirm the use of special characters?")
  if (specialChar) {
    bulkPass += specialchar;
    console.log(bulkPass)
  };
  
  if(passLength >= 8 && passLength <= 128){
    for (let i = 0; i < passLength; i++) {
      finalPass += bulkPass.charAt(
        Math.floor(Math.random() * bulkPass.length));
    };
    
  }else {
    alert("Password must be between 8 and 128 characters");
  };
  confirm("Confirm to see new password");
  return finalPass;
  
};


  
 
  
   







 