// Assignment code here

let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let upperLetter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowerLetter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let specCharacter = [
  "@",
  "%",
  "+",
  "!",
  "#",
  "$",
  "^",
  "?",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

//retrive options from user
function passwordOptions() {
  let length = parseInt(
    prompt("What is the lenght of your password? (8 - 128)")
  );

  let lowerOpt = confirm(
    "Would you like lowercase character/s in your password?"
  );
  let upperOpt = confirm("Would you like upper character/s in your password?");
  let numberOpt = confirm(
    "Would you like number character/s in your password?"
  );
  let specialOpt = confirm(
    "Would you like special character/s in your password?"
  );

  let options = {
    length,
    lowerOpt,
    upperOpt,
    numberOpt,
    specialOpt,
  };
  //console.log(options);
  return options;
}
//rand chars create and RETURN
function generatePassword() {
  var options = passwordOptions();
  var password = [];
  var possiblePassword = [];

  if (options.lowerOpt === true) {
    for (let i = 0; i < options.length; i++) {
      var randindex = Math.floor(Math.random() * lowerLetter.length);
      var randChar = lowerLetter[randindex];
      possiblePassword.push(randChar);
    }
  }
  if (options.upperOpt === true) {
    for (let i = 0; i < options.length; i++) {
      var randindex = Math.floor(Math.random() * upperLetter.length);
      var randChar = upperLetter[randindex];
      possiblePassword.push(randChar);
    }
  }
  if (options.numberOpt === true) {
    for (let i = 0; i < options.length; i++) {
      var randindex = Math.floor(Math.random() * number.length);
      var randChar = number[randindex];
      possiblePassword.push(randChar);
    }
  }
  if (options.specialOpt === true) {
    for (let i = 0; i < options.length; i++) {
      var randindex = Math.floor(Math.random() * specCharacter.length);
      var randChar = specCharacter[randindex];
      possiblePassword.push(randChar);
    }
  }

  for (let i = 0; i < options.length; i++) {
    var randindex = Math.floor(Math.random() * possiblePassword.length);
    var randChar = possiblePassword[randindex];
    password.push(randChar);
  }

  return password.join("");
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
