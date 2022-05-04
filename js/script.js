var Mypassword = document.getElementById("psw");
var length = document.getElementById("length");
var number = document.getElementById("number");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var Specialcharacters = document.getElementById("special");
var Consequtivenumbers = document.getElementById("consequtive");
var Englishcharacterss = document.getElementById("english");

Mypassword.onfocus = function () {
  document.getElementById("Alert").style.display = "block";
};
Mypassword.onblur = function () {
  document.getElementById("Alert").style.display = "none";
};

Mypassword.onkeyup = function () {
  // when the users typing in password field start to validate password conditions
  //validate password length

  if (Mypassword.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  // validate password numbers
  var numbers = /[0-9]/g;
  if (Mypassword.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // validate English lowerCaseLetters

  var lowerCaseLetters = /[a-z]/g;
  if (Mypassword.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  // validate English uppercaseletters
  var upperCaseLetters = /[A-Z]/g;
  if (Mypassword.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  // validate special characters- add at lease one special character
  var Specialcharcters = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  if (Mypassword.value.match(Specialcharcters)) {
    Specialcharacters.classList.remove("invalid");
    Specialcharacters.classList.add("valid");
  } else {
    Specialcharacters.classList.remove("valid");
    Specialcharacters.classList.add("invalid");
  }

  // validate consequtive characters- the password must not contain three consequtive numbers
  var Consequtive = /(012|123|234|345|456|567|678|789|890|901)/;
  if (Mypassword.value.match(Consequtive)) {
    Consequtivenumbers.classList.remove("valid");
    Consequtivenumbers.classList.add("invalid");
  } else {
    Consequtivenumbers.classList.remove("invalid");
    Consequtivenumbers.classList.add("valid");
  }

  //validate english characters- the password contains just english characters
  var Englishcharacters = /[^\x00-\x7F]+/;
  if (Mypassword.value.match(Englishcharacters)) {
    Englishcharacterss.classList.remove("valid");
    Englishcharacterss.classList.add("invalid");
  } else {
    Englishcharacterss.classList.remove("invalid");
    Englishcharacterss.classList.add("valid");
  }
}
