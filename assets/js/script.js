// Assignment Code



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}


// Generating the password with window prompts
var generatePassword = function() {
  
  var passwordLength = window.prompt("How long do you want your password to be? It must be inbetween 8 and 128 charcters.")
  if (!passwordLength) {
    return;
  }
  var lowerCase = window.prompt("Do you want lowercase letters in your password? (yes or no)");
  if (!lowerCase) {
    return;
  }
  var upperCase = window.prompt("Do you want uppercase letters in your password? (yes or no)");
  if (!upperCase) {
    return;
  }
  var numericNumbers = window.prompt("Do you want numberic numbers in your password? (yes or no)");
  if (!numericNumbers) {
    return;
  }
  var specialChars = window.prompt("Do you want special characters in your password? (yes or no)");
  if (!specialChars) {
    return;
  }


        if (lowerCase === "yes" && upperCase === "yes" && specialChars === "yes" && numericNumbers === "yes") {
          var options = "abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          password = "";
          for (i = 0; i < passwordLength; i++) {
          password += options.charAt(Math.floor(Math.random() * options.length));      
        }
        return password;
      } else if (lowerCase === "yes" && upperCase === "yes" && specialChars === "yes" && numericNumbers === "no") {
          var options = "abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         } 
         return password;
         } else if (lowerCase === "yes" && upperCase === "yes" && specialChars === "no" && numericNumbers === "yes") {
          var options = "abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }
         return password;
        } else if (lowerCase === "yes" && upperCase === "no" && specialChars === "yes" && numericNumbers === "yes") {
          var options = "abcdefghijklmnopqrstubwxyz123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }
         return password;
        } else if (lowerCase === "no" && upperCase === "yes" && specialChars === "yes" && numericNumbers === "yes") {
          var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }
         return password;
        } else if (lowerCase === "yes" && upperCase === "no" && specialChars === "no" && numericNumbers === "no") {
          var options = "abcdefghijklmnopqrstubwxyz";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
          }
          return password;
         } else if (lowerCase === "no" && upperCase === "yes" && specialChars === "no" && numericNumbers === "no") {
          var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }  
         return password;
        }  else if (lowerCase === "no" && upperCase === "no" && specialChars === "yes" && numericNumbers === "no") {
          var options = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }  
         return password;
        }  else if (lowerCase === "no" && upperCase === "no" && specialChars === "no" && numericNumbers === "yes") {
          var options = "123456789";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }  
         return password;
        }  else if (lowerCase === "yes" && upperCase === "yes" && specialChars === "no" && numericNumbers === "no") {
          var options = "abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }  
         return password;
        }  else if (lowerCase === "yes" && upperCase === "no" && specialChars === "yes" && numericNumbers === "no") {
          var options = "abcdefghijklmnopqrstubwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }  
         return password;
        }  else if (lowerCase === "yes" && upperCase === "no" && specialChars === "no" && numericNumbers === "yes") {
          var options = "abcdefghijklmnopqrstubwxyz123456789";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }  
         return password;
        }  else if (lowerCase === "no" && upperCase === "yes" && specialChars === "yes" && numericNumbers === "no") {
          var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }  
         return password;
        }  else if (lowerCase === "no" && upperCase === "yes" && specialChars === "no" && numericNumbers === "yes") {
          var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }  
         return password;
        }  else if (lowerCase === "no" && upperCase === "no" && specialChars === "yes" && numericNumbers === "yes") {
          var options = "123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          password = "";
          for (var i = 0; i < passwordLength; i++) {
            password += options.charAt(Math.floor(Math.random() * options.length));
         }  
         return password;
        } else if (lowerCase === "no" && upperCase === "no" && specialChars === "no" && numericNumbers === "no") {
          alert("You must choose one of the options.");
          generatePassword();
        }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 







