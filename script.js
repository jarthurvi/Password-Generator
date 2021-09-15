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
 // Lists all the variables I will be using
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUV";
  var lowerCase = "abcdefghijklmnopqrstuv";
  var specialchar = "!@#$%^&*=-+";
  var numbers = "123456789";
  var bulkPass = "";
  var finalPass = "";
  // passLength will be equal to the user input
  var passLength = prompt("Password should be between 8 to 128 characters! How long you want your password to be?");
  
  // if the user confirms to use lowercase, then the lowercase values will be added to the bulkpass string
  var lowerletters = confirm("Confirm use of lowercase letters?");
  if (lowerletters){
     bulkPass += lowerCase;
   
  };
  var upperletters = confirm("Confirm use of uppercase letters?");
  if (upperletters){
    bulkPass += upperCase;
    // if the user confirms to use uppercase, then the uppercase values will be added to the bulkpass string
  };
  var numBers = confirm("Confirm the use of Numbers?");  
  if (numBers) {
    bulkPass += numbers;
   // if the user confirms to use numbers, then the number values will be added to the bulkpass string 
  };
  var specialChar = confirm("Confirm the use of special characters?")
  if (specialChar) {
    bulkPass += specialchar;
    console.log(bulkPass)
  };
  // if the user confirms to use special characters, then the special character values will be added to the bulkpass string
  if(passLength >= 8 && passLength <= 128){
    for (let i = 0; i < passLength; i++) {
      finalPass += bulkPass.charAt(
        Math.floor(Math.random() * bulkPass.length));
    };
   // if the user inputs a value that is less than 8 or mor than 128 it will fire this alert and not generate password. 
  }else {
    alert("Password must be between 8 and 128 characters");
  };
  // this confirms that the user is ready to see their randomly generated password.
  confirm("Confirm to see new password");
  
  //This shows the values selected from the bulkPass after randomization
  return finalPass;
  
};


  
 
  
   







 