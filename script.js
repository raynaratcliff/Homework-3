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
function getPasswordOptions(userCharacters) {
  if (isNaN(userCharacters)) {
    alert("Please enter a valid number.");
    return false;
  } else if (parseInt(userCharacters) < 8) {
    alert("Password length must be at least 8 characters.");
    return false;
  } else if (parseInt(userCharacters) >= 128) {
    alert("Password must be less than 129 characters.");
    return false;
  }
  return true;
}

//Get random characters from each chosen character type
function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//Function to prompt user for password options
function generatePassword() {
  var userCharacters = prompt(
    "How many characters do you want your password to contain?"
  );
  var passwordValid = getPasswordOptions(userCharacters);
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

  //Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    [hascharacters, hasnumbers, hasalphaUpper, hasalphaLower].includes (
      true
    )
  )
    //Array to store types of characters to include in password
  var selectedCharacters = [];

  //Array to contain one of each type of chosen character to ensure each will be used
  var autogenCharacters = [];

  //Conditional statements that add array of each type of character into array of possible characters based on user inputs 
  if (hascharacters) {
    selectedCharacters = selectedCharacters.concat(characters);
    autogenCharacters.push(
      characters[Math.floor(Math.random() * characters.length)]
    );
  }
  if (hasnumbers) {
    selectedCharacters = selectedCharacters.concat(numbers);
    autogenCharacters.push(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
  }
  if (hasalphaLower) {
    selectedCharacters = selectedCharacters.concat(alphaLower);
    autogenCharacters.push(
      alphaLower[
        Math.floor(Math.random() * alphaLower.length)
      ]
    );
  }
  if (hasalphaUpper) {
    selectedCharacters = selectedCharacters.concat(alphaUpper);
    autogenCharacters.push(
      alphaUpper[
        Math.floor(Math.random() * alphaUpper.length)
      ]
    );
  }

  //For loop to iterate over the password length select from the random array 
  var randomCharacters = [];
  for (var i = 0; i < userCharacters; i++) {
    var index = Math.floor(Math.random() * selectedCharacters.length);
    randomCharacters.push(selectedCharacters[index]);
  }
  var replacedPosition = {};
  //While loop to ensure an index position that has already been replaced with a auto generated chosen character 
  while (autogenCharacters.length > 0) {
    var replaceCharacters = Math.floor(Math.random() * randomCharacters.length);
    if (!replacedPosition[replaceCharacters]) {
      randomCharacters[replaceCharacters] = autogenCharacters.pop();
      replacedPosition[replaceCharacters] = true;
    }
  }
  return randomCharacters.join("");
}
// Write password for the input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
