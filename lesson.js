// Callback Function!

console.log('What Jack Ma has to say:')

const advice  = [
    'Before 20: Focus on Learning',
    '20 to 30: Find a Good Boss and a Good Company',
    '30 to 40: Focus on Strengths',
    '40 to 50: Do What You are Good At',
    '50 to 60: Invest in the Next Generation',
    'After 60: Enjoy Life'
];

function giveAdvice(a, callback) {
    if(typeof a !== 'number') callback('Please insert a number!', null) 
    else if(a <=20) callback(null, advice[0]);
    else if(a > 20 && a <=30) callback(null, advice[1]);
    else if(a > 30 && a <=40) callback(null, advice[2]);
    else if(a > 40 && a <=50) callback(null, advice[3]);
    else if(a > 50 && a <=60) callback(null, advice[4]);
    else {
        // setInterval(function() {
            
        // }, 3000);

        callback(null, advice[5]);
       
    }
}   

console.log('Passed here: 0')
giveAdvice(70, (err, data) => {
    if(err) console.log('ERROR:', err);
    else {
        console.log("Result:", data);
    }
});

console.log('Passed here: 1');


// Asynchronous Function


// console.log('What Jack Ma has to say:')

// const advice  = [
//     'Before 20: Focus on Learning',
//     '20 to 30: Find a Good Boss and a Good Company',
//     '30 to 40: Focus on Strengths',
//     '40 to 50: Do What You are Good At',
//     '50 to 60: Invest in the Next Generation',
//     'After 60: Enjoy Life'
// ];

// async function giveAdvice(a) {
//     if(typeof a !== 'number') throw new Error('Please insert a number!');
//         else if(a <=20) return(advice[0]);
//         else if(a > 20 && a <=30) return(null, advice[1]);
//         else if(a > 30 && a <=40) return(null, advice[2]);
//         else if(a > 40 && a <=50) return(null, advice[3]);
//         else if(a > 50 && a <=60) return(null, advice[4]);  
//         else {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve(advice[5])
//                 }, 5000);
//             });
//         }
// }

// call via then & catch
// console.log('Step-1'); 
// giveAdvice(21).then(data => {
// console.log('Result:', data);
// })
// .catch(err => {
// console.log("Error:", err);
// });
// console.log('Step-2');

// call via async

// async function run() {
// let response = await giveAdvice(45);
// console.log(response);
// response = await giveAdvice(70);
// console.log(response);
// response = await giveAdvice(56);
// console.log(response);
// response = await giveAdvice(68);
// console.log(response);
// }
// run();


// MITASK-C 

// Shunday class tuzing tuzing nomi Shop, va
//  uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
//  Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// @MITASK

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
        console.log(`Currently at ${moment().format('HH: mm')} There are ${this.burger_number} burgers, ${this.cola_number} cola bottles, ${this.chips_number} chips`)
    }

     Sell(number1) {
         if(this.burger_number > number1) {
            this.burger_number -= number1;
            console.log(`And at ${moment().format('HH: mm')} ${number1} burger is sold and there is ${this.burger_number} burgers left`);
         }   
    }
    
     Add(number2) {
        this.cola_number += number2;
        console.log(`Now, ${moment().format('HH: mm')} ${number2} bottles of cola added to the basket and now we have ${this.cola_number} in total`);
    }

     Left() {
        console.log(`Finally at ${moment().format('HH: mm')}, there are ${this.burger_number} burgers, ${this.cola_number} cola bottles and ${this.chips_number} chips`);
    }
}

const shop = new Shop(10,5,2);
shop.Current();
shop.Sell(3);
shop.Add(1);
shop.Left();

