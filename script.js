// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



var passwordLength = prompt('How long would you like your password to be? (between 8 and 128)?');
var speCha = confirm('Would you like to use Special Characters (e.g.$@%&*)?');
var numCha = confirm('Would you like to use Numberic Characters (e.g. 1, 2, 3)?');
var lowCaseCha = confirm('Would you like to use Lowercase Characters?');
var uppCaseCha = confirm('Would you like to use Uppercase Characters?');

// Function for getting a random element from an array
function getRandom(arr) {
  var passwordOptions = [];
  var randomSpecialCharacters = Math.floor(specialCharacters*length*Math.random());
  passwordOptions.push(randomSpecialCharacters);
  var randomNumericCharacters = Math.floor(numericCharacters*length*Math.random());
  passwordOptions.push(randomNumericCharacters);
  var randomLowerCasedCharacters = Math.floor(lowerCasedCharacters*length*Math.random());
  passwordOptions.push(randomLowerCasedCharacters);
  var randomUpperCasedCharacters = Math.floor(upperCasedCharacters*length*Math.random());
  passwordOptions.push(randomUpperCasedCharacters);
}

// Function to generate password with user input
function generatePassword(passwordLength, ) {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    
    password += Math.floor(passwordOptions*length*Math.random())
    getRandom(arr);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
