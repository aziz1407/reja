// TASK A: 

function countO (o, pneumonoultramicroscopicsilicovolcanoconiosis) {
 
    let count = 0;
    
    for(let a = 0; a < pneumonoultramicroscopicsilicovolcanoconiosis.length; a++) {
      if(pneumonoultramicroscopicsilicovolcanoconiosis[a] === o) {
        count++;
        }
      }
    return count;
  }
  
  const check = countO('o', 'pneumonoultramicroscopicsilicovolcanoconiosis');
  console.log('Check:', check);

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