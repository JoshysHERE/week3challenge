var characterLength = 8;
var choiceArr = [];
//All possible characters
var  specialCharArr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/,'];
var  lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var  uppercaseArr= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var  numberArr = ['1','2','3','4','5','6','7','8','9','0'];

// Assignment code here
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function writePassword() {
   var correctPrompts = getPrompts(); 
   var passwordText = document.querySelector("#password");

if (correctPrompts) {
   var newPassword = generatePassword();
  passwordText.value = newPassword;
} else {
  passwordTest.value = '';
  }

}

function generatePassword() {
var password = '';
for(var i = 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[randomIndex];
 }
 return password;
//prompts a few messages for the user
}
function getPrompts(){
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be 8 - 128 digits! Please try again.");
    return false;

    }

 
    if (confirm("Would you like lowercase letters in your password?")) {
     
      choiceArr = choiceArr.concat(lowercaseArr);
    }
    if (confirm("Would you like lowercase letters in your password?")) {
     
      choiceArr = choiceArr.concat(uppercaseArr);
    }
    if (confirm("Would you like lowercase letters in your password?")) {
    
      choiceArr = choiceArr.concat(specialCharArr);
    }
    if (confirm("Would you like lowercase letters in your password?")) {
      choiceArr = choiceArr.concat(numberArr);
 
    }
    return true;
}