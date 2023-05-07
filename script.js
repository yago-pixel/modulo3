// Assignment Code
var generateButton = document.querySelector("#generate-password");
var generatePasswordElement = document.querySelector("#generated-password");

// Write password to the #password input
  var password = generatePassword(
    document.querySelector
  );
  var generatePasswordContainer = document.querySelector("#generate-options");
  var lengthInput = document.querySelector("#length");
  var lettersInput = document.querySelector("#letters");
  var numbersInput = document.querySelector("#numbers");
  var symbolsInput = document.querySelector("#symbols");
  var copyPasswordButton = document.querySelector("#copy-password");

  // Function
  var getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(math.random() * 26) + 97);
  };

  var getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  var getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
  }''

  var getSymbol = () => {
    const symbols = "(){}=<>/,.!@#$%*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  var generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ""
    var passwordLength = 8;

    var generators = [
      getLetterLowerCase,
      getLetterUpperCase,
      getNumber,
      getSymbol,
    ];

    for (i = 0; i < passwordLength; i = i + 4) {
      generators.forEach(() => {
        const randomValue =
          generators[Math.floor(Math.random * generators.legth)]();

        console.log(randomValue);
      });
    }
    password = password.slice(0, passwordLength);

    generatePasswordElement.style.display = "block";
    generatePasswordElement.querySelector("h4").innerText = password;
  };

  //var passwordText = document.querySelector("#password");


// Add event listener to generate button
generateButton.addEventListener("click", writePassword => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  )
});

