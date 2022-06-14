// Different characters allowed for password
var charsetArray = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " \!\"\#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ];

var allcharSet = '';

for (var i=0; i<charsetArray.length ; i++){
  allcharSet += charsetArray[i];
};

var lowerUpper = charsetArray[0].concat(charsetArray[1]);
var lowerNumeric = charsetArray[0].concat(charsetArray[2]);
var lowerSpecial = charsetArray[0].concat(charsetArray[3]);
var upperNumeric = charsetArray[1].concat(charsetArray[2]);
var upperSpecial = charsetArray[1].concat(charsetArray[3]);
var numericSpecial = charsetArray[2].concat(charsetArray[3]);

function generatePassword() {

  // Get the length of the password
  var lengthOfPassword = window.prompt("Choose the length of the password: (Must be between 8 and 128) !!!");

  if ((lengthOfPassword >= 8) && (lengthOfPassword <= 128)) {
    console.log("Good job!! You have selected the right option");

    // Get the password combination
    var charactertype = window.prompt("Select atleast one type of characters to be included: \n" + 
    "1. Lowercase[a-z] \n 2. Uppercase[A-Z] \n 3. Numeric[0-9] \n 4. Special characters \!\"\#$%&'()*+,-./:;<=>?@[\]^_`{|}~  \n" +
    "5. Lowercase, Uppercase, Numeric and Special characters \n 6. Uppercase and Lowercase \n 7. Lowercase and Numeric \n 8. Lowercase and Special character \n" + 
    "9. Uppercase and Numeric \n 10. Uppercase and Special characters \n 11. Numeric and Special characters \n ");
    
    if ((charactertype >= 1) && (charactertype <= 11)) {  
      return randomGenerator(lengthOfPassword, charactertype); 
    } else {
      window.alert("Select one from the option (1-11)");
    }

  } else {
    window.alert("OOPS!!! choose between 8 and 128");
  }

  return "";
}

function randomGenerator(len, charactertypePassword){
  var characterType = {
    // Properties are made up of key-value pairs
    1 : charsetArray[0],
    2 : charsetArray[1],
    3 : charsetArray[2],
    4 : charsetArray[3],
    5 : allcharSet,
    6 : lowerUpper,
    7 : lowerNumeric,
    8 : lowerSpecial,
    9 : upperNumeric,
    10 : upperSpecial,
    11 : numericSpecial
  };
  var charSet = characterType[charactertypePassword];
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
