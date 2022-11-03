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



var lowerCase = window.prompt("Do you want lowercase letters in your password?");
  if (lowerCase === yes) {
    localStorage.setItem("yes", lowerCase);
  } else {
    localStorage.setItem("no", lowerCase);
  }

  var upperCase = window.prompt("Do you want uppercase letters in your password?");
   if (upperCase === yes) {
      localStorage.setItem("yes", upperCase);
    } else {
      localStorage.setItem("no", upperCase);
    }
    
    var numericNumbers = window.prompt("Do you want numberic numbers in your password?");
      if (numericNumbers === yes) {
        localStorage.setItem("yes", numericNumbers);
      } else {
        localStorage.setItem("no", specialChars);
      }
      
      
      var specialChars = window.prompt("Do you want special characters in your password?");
        if (specialChars === yes) {
          localStorage.setItem("yes", specialChars);
        } else {
          localStorage.setItem("no", specialChars);
        }

        var lower = "abcdefghijklmnopqrstuvwxyz";
        var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numeric = "123456789";
        var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


        if (lowerCase === yes && upperCase === yes && specialChars === yes && numericNumbers === yes) {
        var options = "abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          for (var i = 0; i <= passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * options.length);
          password += chars.substring(randomNumber, randomNumber +1);
          }
         } else if (lowerCase === yes && upperCase === yes && specialChars === yes && numericNumbers === no) {
          var options = "abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         } 
         } else if (lowerCase === yes && upperCase === yes && specialChars === no && numericNumbers === yes) {
          var options = "abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }
        } else if (lowerCase === yes && upperCase === no && specialChars === yes && numericNumbers === yes) {
          var options = "abcdefghijklmnopqrstubwxyz123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }
        } else if (lowerCase === no && upperCase === yes && specialChars === yes && numericNumbers === yes) {
          var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }
        } else if (lowerCase === yes && upperCase === no && specialChars === no && numericNumbers === no) {
          var options = "abcdefghijklmnopqrstubwxyz";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
          }
         } else if (lowerCase === no && upperCase === yes && specialChars === no && numericNumbers === no) {
          var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }  
        }  else if (lowerCase === no && upperCase === no && specialChars === yes && numericNumbers === no) {
          var options = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }  
        }  else if (lowerCase === no && upperCase === no && specialChars === no && numericNumbers === yes) {
          var options = "123456789";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }  
        }  else if (lowerCase === yes && upperCase === yes && specialChars === no && numericNumbers === no) {
          var options = "abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }  
        }  else if (lowerCase === yes && upperCase === no && specialChars === yes && numericNumbers === no) {
          var options = "abcdefghijklmnopqrstubwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }  
        }  else if (lowerCase === yes && upperCase === no && specialChars === no && numericNumbers === yes) {
          var options = "abcdefghijklmnopqrstubwxyz123456789";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }  
        }  else if (lowerCase === no && upperCase === yes && specialChars === yes && numericNumbers === no) {
          var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }  
        }  else if (lowerCase === no && upperCase === yes && specialChars === no && numericNumbers === yes) {
          var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }  
        }  else if (lowerCase === no && upperCase === no && specialChars === yes && numericNumbers === yes) {
          var options = "123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * options.length);
            password += chars.substring(randomNumber, randomNumber +1);
         }  

        







      
  
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 







