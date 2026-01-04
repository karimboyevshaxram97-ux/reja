function checkContent(shakhram1, shakhram2) {
  if (shakhram1.length !== shakhram2.length) return false;

  let count = {};

  for (let char of shakhram1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of shakhram2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}



//------------------------------------------------------------------------------------
/*
function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") { 
      count++;
    }
  }
  return count;
}

                                                                               // Test
console.log(countDigits("ad2a54y79wet0sfgb9"));                                // 7
console.log(countDigits("hello123world"));                                     // 3
console.log(countDigits("noDigitsHere"));                                      // 0
*/

//-----------------------------------------------------------------------------
/*
function countLetter(letter, word) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }

  return count;
}

console.log(countLetter("e", "engineer")); 
*/
