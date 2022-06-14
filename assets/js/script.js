function generatePassword() {
  var lengthOfPassword = window.prompt("Choose the length of the character: (Must be between 8 and 128) !!!");

  if ((lengthOfPassword >= 8) && (lengthOfPassword <= 128)) {
    console.log("Good job!! You have selected the right option");
  } else {
    window.alert("OOPS!!! choose between 8 and 128");
  }
  return "";
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
