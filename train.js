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

// const moment = require('moment');
// const schedule = require ('node-schedule')

// class Shop {
//     burger_number;
//     cola_number;
//     chips_number;

//     constructor(number1, number2, number3) {
//         this.burger_number = number1;
//         this.cola_number = number2;
//         this.chips_number = number3;
//     }

//      Current() {
//         console.log(Currently at ${moment().format('HH:mm')} There are ${this.burger_number} burgers, ${this.cola_number} cola bottles, ${this.chips_number} chips.)
//     }

//      Sell(number1) {
//          if(this.burger_number > number1) {
//             this.burger_number -= number1;
//             console.log(And at ${moment().format('HH:mm')} ${number1} burgers are sold and only ${this.burger_number} burgers left.);
//          }   
//     }
    
//      Add(number2) {
//         this.cola_number += number2;
//         console.log(Now at ${moment().format('HH:mm')} ${number2} bottles of cola added to the basket and now we have ${this.cola_number} in total.);
//     }

//      Left() {
//         console.log(Finally at ${moment().format('HH:mm')}, there are ${this.burger_number} burgers, ${this.cola_number} cola bottles and ${this.chips_number} chips.);
//     }
// }

// const shop = new Shop(4,4,3);
// shop.Current();
// shop.Sell(2);
// shop.Add(2);
// shop.Left();

// Solution

// Class yasab olinib, unga methodlar qoshilib, methodlarga conditionlar berilib, methodlar ichida 
// moment core package orqali har bir log ishga tushgan payt uchun vaqt berib olindi va methodlar call qilindi!

// D-TASK: Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkLetters(a, b) {
//     if(a.length !== b.length) {
//         return false; 
//     }
//     for(let s = 0; s < a.length; s++) {
//         let startCheck = false; 
//         for (let p = 0; p < b.length; p++) {
//             if (a[s] === b[p]) {
//                 startCheck = true; 
//         }
//     }
//         if(startCheck === false) {
//             return false;
//         } else {
//             return true;
//         }
//     }

// }
// const resultCheck = checkLetters('abdulaziz', 'zizaludba');
// console.log('Result:', resultCheck);
// const resultCheck2 = checkLetters('me', 'you');
// console.log('Result:', resultCheck2);

// Solution

// 1. Avvalo harflar bir-biriga togri kelish-kelmasligini bilish uchun:
// ularning lengthini aniqlab olish kerak!
// 2. Loop avvalgi looplar bilan bir xil faqat bu yerda 2ta loop tuzilgan.
// 3. 1-chi loopdan keyin variable ochib uni qiymati = false qilingan.
// 4. Ikkinchi loopda berilgan conditionga kora, shart true bolsa, osha
// false ga tenglashtirilgan variable qiymati true qilindi.
// 5. Shartga kora true bolsa true false bolsa false qaytar deyildi.
// 6. call qilinib olindi.
// 7.1 Aytgancha, birinchi shart meet topilmasa, qolgan logika otishni hojati qolmaydi!

// Task-E

// function teskariTarafga(word) {
//     let teskari = '';

//     for(let u = word.length - 1; u >= 0; u--){
//         teskari += word[u];
//     }
//     return teskari;
// }

// const p = teskariTarafga('zizaludba');
// console.log(p);

// Solution

// 1. function tuzib olinib, uni ichiga variable ochib stringga tenglab olindi
// 2. loopdan foydalanilgan, faqat endi u'ni 0ga emas word'ni length'ga tenglashtirilib
// 3. wordning oxirgi indexidan boshla, va teskarisiga harakatlan u-- commandi berildi
// 4. teskari variabliga word[u] qiymati qoshib qoyildi


// function DoubleLetters(f) {

//     for(let u = 0; u < f.length; u++) {
//         if(f[u] === f[u + 1]) {
//             return true;
//         }
//     }
//     return false;
// }

// const done = DoubleLetters('looping')
// console.log(done);



// TASK-G

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.


function biggestNumber(...numbers) {

    let biggest = numbers[0];

    for(let num of numbers) {
        if(num > biggest) {
            biggest = num;
        }
    }
    return biggest;
}

const final = biggestNumber(10, 21, 14, 7, 22);
console.log('Biggest:', final);





// function longestWord(hello) {
//     if(typeof hello !== "string")
//         return false;

//     let keys = hello.split(' ');
//     let shortest = keys[2];

//     for(let key of keys) {
//         if(key.length < shortest.length) {
//             shortest = key;
//         }
//     }
//     return shortest;
// }

// const h = longestWord('She loves programming');
// console.log(h);







































// function p(a) {
//     if(typeof a === 'number') return false;

//     let m = a.toLowerCase();

//     let b = m.split('').reverse().join("");

//     if(b === m) {
//         return true;
//     }
//     return false;
// }

// const j = p('level')
// const k = p('devil');
// console.log('j:', j);
// console.log('k:', k);


// function UpperCase(z) {
//     if(typeof z === 'number') return false;

//     let h = z.toLowerCase()

//     let count = 0;

//     for(let l = 0; l < z.length; l++) {
//         if(z[l] >= 'a' && z[l] <= 'z')
//         count = count + 1;
//     }
//     return count;
// }

// const v = UpperCase('Hello Aiden');
// console.log('Result:', v);


// function longestWord(hello) {
//     if(typeof hello !== "string")
//         return false;

//     let keys = hello.split(' ');
//     let shortest = keys[2];

//     for(let key of keys) {
//         if(key.length < shortest.length) {
//             shortest = key;
//         }
//     }
//     return shortest;
// }

// const h = longestWord('She loves programming');
// console.log(h);