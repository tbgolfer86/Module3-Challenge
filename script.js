// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChoices = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChoices = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','@','#','$','%','^','&','*','_','-','+','='];

function generatePassword() {
  var chosenCharacters = [];
  var passwordLength = prompt("Please enter the length of the password(8-128 characters)");
  if (passwordLength >= 129 || passwordLength <= 7) {
      generatePassword();
  }
  var lowerCase = confirm("Click 'OK' to include lowercase letters in your password");
  if (lowerCase == true) {
      let lower = chosenCharacters.concat(lowerChoices);
      console.log(lower);
  }
  var upperCase = confirm("Click 'OK' to include UPPERCASE letters in your password");
  if (upperCase == true) {
      let upperLower = chosenCharacters.concat(lowerChoices,upperChoices);
      console.log(upperLower);
  }
  var numbers = confirm("Click OK to include numbers in your password");
  if (numbers == true) {
      let upperLowerNum = chosenCharacters.concat(lowerChoices,upperChoices,numberChoices);
      console.log(upperLowerNum);
  }
  var specialChar = confirm("Click 'OK' to include special characters in your password");
  if (specialChar == true) {
      let allChoices = chosenCharacters.concat(lowerChoices,upperChoices,numberChoices,specialCharacters);
      console.log(allChoices);
      console.log(allChoices.length)
  
      let randomPass = allChoices[Math.floor(Math.random() * allChoices.length)];
      console.log(randomPass);
    
      return randomPass;
    }

} 

/*          for (let i = 0; i < passwordLength; i++) { }          */


// 1. prompt the user for password criteria
//    a.password length 8 - 128 char
//    b.lowercase, uppercase, numbers, special characters
// 2. validate the input
// 3. generate password
// 4. display password on page
//return randomPass;




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

