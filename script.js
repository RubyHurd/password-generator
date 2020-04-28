//Write necessary variables
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// Write a function to prompt the user for password options
function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like for your secure password?")
  );

  // Check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert("Password length must less than 129 characters");
    return;
  }

  // Variables to store the inclusion of numeric, uppercase, lowercase, and special characters
  var hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );

  var hasUpperCaseCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );

  var hasLowerCaseCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );

  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false
  ) {
    alert("Must select at least one character type");
    return;
  }

  //Store user input in object
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters
  };

  return passwordOptions;
}

//Write function to get random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Write the function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  // Write the conditional statements that adds array of special, numeric, lowercase and uppercase characters into array of possible characters based on user input
  // Push each to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    guaranteedCharacters.push(getRandom(lowercaseCharacters));
  }

  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    guaranteedCharacters.push(getRandom(uppercaseCharacters));
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Need at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Make the result into a string and pass into writePassword
  return result.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
alert("Click the Generate Password button for your secure password.")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
