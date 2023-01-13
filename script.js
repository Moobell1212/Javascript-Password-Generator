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

// set the initial value of passwordLength to 0 so that it can be used i nthe getPasswordOptions function
var passwordLength = 0;

// function to get options once "Generate Password" is clicked
function getPasswordOptions() {
passwordLength = prompt('How long would you like your password to be? (between 10 and 64)?');
if (passwordLength < 10 || passwordLength > 64 || passwordLength === null){
  while (passwordLength < 10 || passwordLength > 64 || passwordLength === null){
  alert("The password length must be between 10 and 64 inclusive.");
  passwordLength = prompt('How long would you like your password to be? (between 10 and 64)?');}
};
speCha = confirm('Would you like to use Special Characters (e.g.$@%&*)?');
numCha = confirm('Would you like to use Numberic Characters (e.g. 1, 2, 3)?');
lowCaseCha = confirm('Would you like to use Lowercase Characters?');
uppCaseCha = confirm('Would you like to use Uppercase Characters?');
}


// Function for getting a random element from an array
// create a new array for the generated password
var randomGeneratedPassword = [];

function getRandom() {
  // array for the choices made with each itteration of getRandom (to stop all itteration choices going into one main array)
  var interationchoices = [];

  // if loop for if the user chooses to have special characters. 
  if (speCha === true) {
  var specialCharactersIndex = Math.floor(specialCharacters.length*Math.random());
  var randomSpecialCharacters = specialCharacters[specialCharactersIndex];
  interationchoices.push(randomSpecialCharacters);
  };

  // if loop for if the user chooses to have numeric characters
  if (numCha === true){
  var numericCharactersIndex = Math.floor(numericCharacters.length*Math.random());
  interationchoices.push(numericCharactersIndex);
  };
 
  // if loop for if the user chooses to have lowercase characters
  if (lowCaseCha === true){
  var lowerCasedCharactersIndex = Math.floor(lowerCasedCharacters.length*Math.random());
  var randomLowerCasedCharacters = lowerCasedCharacters[lowerCasedCharactersIndex];
  interationchoices.push(randomLowerCasedCharacters);};
  
  // if loop for if the user chooses to have uppercase characters
  if (uppCaseCha === true){
  var upperCasedCharactersIndex = Math.floor(upperCasedCharacters.length*Math.random());
  var randomUpperCasedCharacters = upperCasedCharacters[upperCasedCharactersIndex];
  interationchoices.push(randomUpperCasedCharacters);};

  // consolelog to check that the above if loops are working
  // console.log(interationchoices);

  // choosing a random option from the iterationchoises from this loop (loop created in the generatePassword function)
  var randomGeneratedIndex = Math.floor(interationchoices.length*Math.random());
  var randomGeneratedChoice = interationchoices[randomGeneratedIndex];
  randomGeneratedPassword.push(randomGeneratedChoice);

  // consolelog to check that the above code is working
  // console.log(randomGeneratedPassword);
  
}

/* Function to generate password using user input (mainly how large the password should be). With each iteration (based on the password length chosen by the user) 
the generatePassword function is run which chooses a random element chosen from the array created getting random elements from the original arrays */
function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
    getRandom();
  }
}

// References to the #generate element
var generateBtn = document.querySelector('#generate');


// Function to write out the password in string form then input into the password section on the webpage
function writePassword() {
  getPasswordOptions();
  generatePassword();
  var passwordText = document.querySelector('#password');

  var writtenPassword = randomGeneratedPassword.join("");
  passwordText.value = writtenPassword;
}

// Event listener to generate button
generateBtn.addEventListener('click', writePassword);
