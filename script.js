// Assignment Code
var generateBtn = document.querySelector("#generate");
var genaretepasswordElement = document.querySelector("generated-password");

// Write password to the #password input
function writePassword() {
  console.log ('generatePassword');

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  function getLetterLowerCase () {
   return String.fromCharCode(Math.floor(math.random() * 26) + 97);
  }

  function getLetterUpperCase (){
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getNumber (){
  return Math.floor(Math.random() * 10).toString();
  }

function getSymbol (){
  const symbols = "(){}=<>/,.!@#$%*+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword (){
  var writePassword = ('getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol');
  console.log (writePassword);
} 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var response = prompt ('password');
  console.log (response);
