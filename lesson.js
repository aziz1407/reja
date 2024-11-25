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


