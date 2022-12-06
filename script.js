// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("Please enter the length of the password(8-128 characters)");
  var lowerCase = confirm("Click 'OK' to include lowercase letters in your password");
  var upperCase = confirm("Click 'OK' to include UPPERCASE letters in your password");
  var numbers = confirm("Click OK to include numbers in your password");
  var specialChar = confirm("Click 'OK' to include special characters in your password");
  var password ="";

/*
  const lowerChoice = [abcdefghijklmnopqrstuvwxyz];
  const upperChoice = [ABCDEFGHIJKLMNOPQRSTUVWXYZ];
  const numbers = [0123456789];
  const specialChar = [!@#$%^&*_-+=];
*/

// 1. prompt the user for password criteria
//    a.password length 8 - 128 char
//    b.lowercase, uppercase, numbers, special characters
// 2. validate the input
// 3. generate password
// 4. display password on page
return "generated password will go here";
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


