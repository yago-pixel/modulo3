// Assignment Code
var generateBtn = document.querySelector("#generate-password");
var generatePasswordElement = document.querySelector("#generated-password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(math.random() * 26) + 97);
  };
  var getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
var getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};
var getSymbol = () => {
    const symbols = "(){}=<>/,.!@#$%*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

var generatePassword = ( getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ""
    var passwordLength = 10

    var generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]
    for(i = 0; i < passwordLength; i = i + 4){
        generators.forEach(() => {
            const randomValue=
            generators[Math.floor(Math.random * generators.legth)]();

            console.log(randomValue);
        });
    }
    password = password.slice(0, passwordLength);

    gemeratePasswordElement.style.display = "block";
    generatePasswordElement.querySelector("h4").innerText = password;
};

  //var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword => {
gemeratePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
)
});

