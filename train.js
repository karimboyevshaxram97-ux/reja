 
 
 function getReverse(str) {
    return str.split("").reverse().join("");
}

console.log(getReverse("hello"));   
console.log(getReverse("world"));   

/*
class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

 getTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

 qoldiq() {
    console.log(
      `Hozir ${this.getTime()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`
    );
  }

   sotish(mahsulot, soni) {
    if (this[mahsulot] >= soni) {
      this[mahsulot] -= soni;
      console.log(
        `Hozir ${this.getTime()}da ${soni}ta ${mahsulot} sotildi!`
      );
    } else {
      console.log(
        `Hozir ${this.getTime()}da ${mahsulot} yetarli emas!`
      );
    }
  }

  qabul(mahsulot, soni) {
    this[mahsulot] += soni;
    console.log(
      `Hozir ${this.getTime()}da ${soni}ta ${mahsulot} qabul qilindi!`
    );
  }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq();              
shop.sotish("non", 3);      
shop.qabul("cola", 4);     
shop.qoldiq();             

*/

/*
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
*/


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
