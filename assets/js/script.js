// Assignment Code
var generateBtn = document.querySelector("#generate");

//Usable characters for the password
var lowerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChoices = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChoices = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','@','#','$','%','^','&','*','_','-','+','='];

//takes user input
var passwordLength
var chosenCharacters = [];

function generatePassword() {
  passwordLength = prompt("Please enter the length of the password(8-128 characters)");
  if (passwordLength === null) {
    return;
  } else if (passwordLength >= 129 || passwordLength <= 7) {
      alert("Must be between 8-128 characters!");
    return;
  }
  
  lowerCase = confirm("Click 'OK' to include lowercase letters. Click 'Cancel' to skip");
  if (lowerCase == true) {
      chosenCharacters = chosenCharacters.concat(lowerChoices);
      alert("You added lowercase letters to your password!");
      console.log(chosenCharacters);
  }
  upperCase = confirm("Click 'OK' to include UPPERCASE letters. Click 'Cancel' to skip");
  if (upperCase == true) {
      chosenCharacters = chosenCharacters.concat(upperChoices);
      alert("You added uppercase letters to your password!");
      console.log(chosenCharacters);
  }
  numbers = confirm("Click OK to include numbers. Click 'Cancel' to skip");
  if (numbers == true) {
      chosenCharacters = chosenCharacters.concat(numberChoices);
      alert("You added numbers to your password!");
      console.log(chosenCharacters);
  }
  specialChar = confirm("Click 'OK' to include special characters. Click 'Cancel' to skip");
  if (specialChar == true) {
      chosenCharacters = chosenCharacters.concat(specialCharacters);
      alert("You added special characters to your password!");
      console.log(chosenCharacters);
  }

} 
//loops through the chosenCharacters array
function forLoop() {
  var pass =""
  for (let i = 0; i < passwordLength; i++) { 
    console.log(passwordLength);
    let randomChar = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
    pass = pass + randomChar;
  }
  console.log(pass)  
  return pass; 
      
}
//clears chosenCharacters array to avoid having to refresh page to use the generator again
function clearChosen() {
  chosenCharacters = [];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var password = forLoop();
clearChosen();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

