// Special characters 
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Set the requirments for input to generate the password
function getPasswordOptions(userNumCharacters) {
  if (isNaN(userNumCharacters)) {
    alert("Please enter a valid number.");
    return false;
  } else if (parseInt(userNumCharacters) < 8) {
    alert("Password length must be at least 8 characters.");
    return false;
  } else if (parseInt(userNumCharacters) >= 128) {
    alert("Password must be less than 129 characters.");
    return false;
  }
  return true;
}

//Get random characters from each chosen character type
function getRandomElementFromArray(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

//Function to prompt user for password options
function generatePassword() {
  var userNumCharacters = prompt(
    "How many characters do you want your password to contain?"
  );
  var passwordValid = getPasswordOptions(userNumCharacters);
  if (passwordValid) {
    var hascharacters = confirm(
      "Click OK to confirm special characters."
    );
    var hasnumbers = confirm("Click OK to confirm adding numeric characters.");
    var hasalphaLower = confirm(
      "Click OK to confirm adding lowercase characters."
    );
    var hasalphaUpper = confirm(
      "Click OK to confirm including uppercase characters."
    );
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
