// Assignment code here
var generateBtn = document.querySelector("#generate");
function generatePassword() {

var uppercase = confirm("Your password should have an uppercase letter! Click OK to continue");
var lowercase = confirm("Your password should have a lowercase letter! Click OK to continue");  
var symbols = confirm("Your password should have a symbol! Click OK to continue");
var numbers = confirm("Your password should have a number! Click OK to continue");
var Keylength = prompt("Password must be between 8 and 128 Click OK to continue");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
