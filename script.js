// Assignment code here
var generateBtn = document.querySelector("#generate");

//creates function called generatePassword()
function generatePassword() {

var uppercase = confirm("Your password should have an uppercase letter! Click OK to continue");
var lowercase = confirm("Your password should have a lowercase letter! Click OK to continue");  
var symbols = confirm("Your password should have a symbol! Click OK to continue");
var numbers = confirm("Your password should have a number! Click OK to continue");
var Keylength = prompt("Password must be between 8 and 128 Click OK to continue");

//Password Var
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWZYX";
var lowercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWZYX";
var specialSymbols = "!@#$%^&*()?.<\>|=+:;,[-_]";
var numeric = "0123456789";
var multiSelect = [];

//criteria check for the user
if (keyLength < 8 || keyLength > 128) {
  alert("Your passwords does not meet the criteria");
  var keyLength = prompt("Passwords must be between 8 and 128 characters in length!");
}

if(uppercaseABC === false && lowercaseABC === false specialSymbols === false && numeric === false) {
return "Your passwords does not meet the password criteria";
};

var uppercaseABC = confirm("Your password should have an uppercase letter!");
var lowercaseABC = confirm("Your password should have a lowercase letter!");
var symbols = confirm("Your password should have a symbol! Click OK to continue");
var numbers = confirm("Your password should have a number! Click OK to continue");





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
