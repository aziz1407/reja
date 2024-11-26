// TASK A: 

// function countO (o, pneumonoultramicroscopicsilicovolcanoconiosis) {
 
//     let count = 0;
    
//     for(let a = 0; a < pneumonoultramicroscopicsilicovolcanoconiosis.length; a++) {
//       if(pneumonoultramicroscopicsilicovolcanoconiosis[a] === o) {
//         count++;
//         }
//       }
//     return count;
//   }
  
//   const check = countO('o', 'pneumonoultramicroscopicsilicovolcanoconiosis');
//   console.log('Check:', check);

//   A-Task Solution:

// Step-1: countO deb nomlangan function ochib olib unga (o va pneumonoultramicroscopicsilicovolcanoconiosis) parametrlarini berib oldim. 
// Maqsad: parametr 1 parametr 2'da necha marta ishlatilganligini return qilish.
// Step-2: let variablelini hosil qilib uning qiymatini 0ga tengladim, chunki shunda sanoq noldan boshlanadi!
// Step-3: for loopini ochib oldim, chunki looplar parameterimni har harfini dona-dona tekshirib, true yani bu case'da (o) ni izlaydi.
// Step-4: loopni ichida variable ochib uni qiymatini 0ga tengladim, va bu a'ning qiymati ya'ni 0, parametr 2'ni loop qilishni 0-indexdan
// boshlaydi degani.
// Step-5: Loop false holatiga yetib borguncha ishga tushadi, ya'ni parametr 2'da nechta harf bolsa shuncha marta ishga tushib, to'xtaydi.
// Step-6: condition holatida: parameter ikkida 0'chi indexdan boshlangan qiymat (o)ga teng bo'lsa condition true bo'ladi va count++ 
// true qiymatlarni qo'shib borishni ta'minlaydi.
// Last step: function call qilindi!

// // TASK-B

//  function countDigits(word) {
//   let count = 0;

//   for(let d = 0; d < word.length; d++) {
//     if(word[d] >= 0, word[d] <= 9) 
//       count++;
//   }
//   return count;
//  }

//  const digits = countDigits('a1b4d0u7l2a0z0i3z');
//  console.log('Check:', digits);

// Solution:

// if(word[d] >= '0', word[d] <= 9) count++; shu qismida aytyapmanki: agar word'ning 0 indexi 0ga teng yoki katta bo'lsa va 9dan kichik yoki teng
// bolsa true qiymatlarni add qilib ket. Va u argumentda necha soz bolsa shuncha marta ishga tushib 9dan kichik sonlar nechta bolsa
// osha raqamni return qiladi.

//  a1b4d0u7l2a0z0i3z

// MITASK-C 

// Shunday class tuzing tuzing nomi Shop, va
//  uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
//  Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

const moment = require('moment');
const schedule = require ('node-schedule')

class Shop {
    burger_number;
    cola_number;
    chips_number;

    constructor(number1, number2, number3) {
        this.burger_number = number1;
        this.cola_number = number2;
        this.chips_number = number3;
    }

     Current() {
        console.log(`Currently at ${moment().format('HH:mm')} There are ${this.burger_number} burgers, ${this.cola_number} cola bottles, ${this.chips_number} chips.`)
    }

     Sell(number1) {
         if(this.burger_number > number1) {
            this.burger_number -= number1;
            console.log(`And at ${moment().format('HH:mm')} ${number1} burgers are sold and only ${this.burger_number} burgers left.`);
         }   
    }
    
     Add(number2) {
        this.cola_number += number2;
        console.log(`Now at ${moment().format('HH:mm')} ${number2} bottles of cola added to the basket and now we have ${this.cola_number} in total.`);
    }

     Left() {
        console.log(`Finally at ${moment().format('HH:mm')}, there are ${this.burger_number} burgers, ${this.cola_number} cola bottles and ${this.chips_number} chips.`);
    }
}

const shop = new Shop(5,3,2);
shop.Current();
shop.Sell(3);
shop.Add(2);
shop.Left();

// Solution

// Class yasab olinib, unga methodlar qoshilib, methodlarga conditionlar berilib, methodlar ichida 
// moment core package orqali har bir log ishga tushgan payt uchun vaqt berib olindi va methodlar call qilindi!