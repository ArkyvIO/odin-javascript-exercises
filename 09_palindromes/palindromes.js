const palindromes = function (userStr) {

   let strNoWhiteSpace = userStr.replace(/[^a-z0-9]/gi, '');
   let strNoUpperCase = strNoWhiteSpace.toLowerCase();
   let userArr = strNoUpperCase.split('');
   let checkArr = userArr.slice().reverse();
   let isPalindrome = false;

   for (let i = 0; i < userArr.length; i++) {
      if (isPalindrome === true || i === 0) {
         if (userArr[i] === checkArr[i]) {
            isPalindrome = true;
         } else {
            isPalindrome = false;
         }
      }
   }

   return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;
