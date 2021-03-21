// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = ["!", "#", "#", "$", "%", "&", "~"];
var cap = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = [ 1,2,3,4,5,6,7,8,9,0];
var capAns = false;
var lowerAns = false;
var numberAns = false;
var specialAns = false;
var passwordFinal = "";
var userChoice ;



function generatePassword() {
   userChoice = window.prompt("How many characters would you like your password to contain?");
  
  if (!userChoice || parseInt(userChoice) > 128 || parseInt(userChoice) < 8) {
     return password;
  } else {
    generateCapital();
  }
}

function generateCapital() {
  var capChar = window.confirm("Would you like to add capital characters to your password?");
  if (capChar == true) {
     capAns = true;
  }
  generateLower()
}

function generateLower() {
  var lowChar = window.confirm("Would you like to add lower characters to your password?")
  if (lowChar == true) {
     lowerAns = true;
  }
  generateSpecial()
}


function generateSpecial() {
  var sChar = window.confirm("Would you like to add special characters to your password?");
  if (sChar == true) {
    specialAns = true;
  }
  generateNumbers()
}

function generateNumbers() {
  var numChar = window.confirm("Would you like to add numbers to your password?");
  if (numChar == true) {
    numberAns = true;
  }
  finalPassword()
}

function finalPassword() {
  var generatorPassword = "";
  
  while (generatorPassword.length < userChoice) {
    var randomize = getRandomInt(4);

    if (capAns && randomize == 0) {
      console.log(cap[getRandomInt(26)])
      generatorPassword += cap[getRandomInt(26)]
    }
  
    if (lowerAns && randomize == 1) {
      generatorPassword += lower[getRandomInt(26)]
    }
  
    if (numberAns && randomize == 2) {
      generatorPassword += number[getRandomInt(10)]
    }
  
    if (specialAns && randomize == 3) {
      generatorPassword += special[getRandomInt(7)]
    }

    if(!capAns && !lowerAns && !numberAns && !specialAns) { break; }
  }
  passwordFinal = generatorPassword;
  var passwordText = document.querySelector("#password");
  console.log(generatorPassword)
  passwordText.value = passwordFinal;
}

function getRandomInt(max) {
  console.log("inside get random int")
  return Math.floor(Math.random() * Math.floor(max));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


