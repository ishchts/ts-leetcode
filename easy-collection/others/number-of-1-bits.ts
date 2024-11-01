// function dec2bin(dec: number): string {
//     return (dec >>> 0).toString(2);
//   }
  
// function hammingWeight(n: number): number {
//     let result = 0;
//     const str = dec2bin(n);
    
//     for (let i = 0 ; i < str.length; i ++) {
//         if (Number(str[i]) === 1) {
//             result += 1;
//         }
//     }
    
//     return result;
// };

function hammingWeight(n: number): number {
  let count: number = 0;

  for (let i = 0; i < 32; i += 1) {
      count += (n >> i) & 1;
  }
  return count;
};

// @ts-ignore
console.log('hammingWeight', hammingWeight(11));

/**
 * 32 битное число это чисто состоящее из 32 нолей и единиц. Они произодят операции, используя двоичное преставление числа.
 * 
 * Побитовые операторы в JavaScript работают с 32-битными целыми числами в их двоичном представлении.
 * 
 * parseInt() - принимает число и его систему. Выводит в десятичной
 * 4..toString(su)
 */


