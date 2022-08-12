// Different characters allowed for password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialCharacters = " \!\"\#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {

  // Get the length of the password
  var lengthOfPassword = window.prompt("Choose the length of the password: (Must be between 8 and 128) !!!");

  if ((lengthOfPassword >= 8) && (lengthOfPassword <= 128)) {
    console.log("Good job!! You have selected the right option");

    var containsUpper = window.confirm( "Does the password contain Uppercase[A-Z]?\nOK - Yes\nCancel - No");
    var containsLower = window.confirm( "Does the password contain Lowercase[a-z]?\nOK - Yes\nCancel - No");
    var containsNumeric = window.confirm( "Does the password contain Numeric[0-9]?\nOK - Yes\nCancel - No");
    var containsSpecialCharacter = window.confirm( "Does the password contain Special characters?\nOK - Yes\nCancel - No");

    var charSet = "";
    if (!containsUpper && !containsLower && !containsNumeric && !containsSpecialCharacter) {
      window.alert("You must choose a criteria!");
    } else {
      // Get the password combination
      if (containsUpper){
        charSet = charSet.concat(upperCase);
      }
      if (containsLower) {
        charSet = charSet.concat(lowerCase);
      }
      if (containsNumeric) {
        charSet = charSet.concat(numeric);
      }
      if (containsSpecialCharacter) {
        charSet = charSet.concat(specialCharacters);
      }
      return randomGenerator(lengthOfPassword, charSet);
    }
  } else {
    window.alert("OOPS!!! choose between 8 and 128");
  }
  return "";
}

function randomGenerator(len, charSet){
  var randomPassword = '';
  for (var i = 0; i < len; i++) {
    // Use random to get random positions from the password combination allowed.
    var randomPosition = Math.floor(Math.random() * charSet.length);
    randomPassword+=charSet[randomPosition];
  }
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
