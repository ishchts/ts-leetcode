/**
 * Римские цифры представлены семью различными символами: I, V, X, L, C, D и M.
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * Например, 2 записывается как II в римской нумерации, просто две единицы, сложенные вместе. Число 12 записывается как XII,
 * то есть просто X + II. Число 27 записывается как XXVII, то есть XX + V + II.
 * 
 * Римские цифры обычно пишутся слева направо от наибольшей к наименьшей. Однако цифра, обозначающая четыре, не IIII.
 * Вместо этого число четыре записывается как IV. Поскольку единица находится перед пятеркой, мы вычитаем ее, получая четыре.
 * Тот же принцип применим к числу девять, которое записывается как IX. Есть шесть случаев, когда используется вычитание:
 * I можно поставить перед V (5) и X (10), чтобы получились 4 и 9.
 * X можно поставить перед L (50) и C (100), чтобы получить 40 и 90.
 * C можно поставить перед D (500) и M (1000), чтобы получить 400 и 900.
 * 
 * Задав римскую цифру, преобразуйте ее в целое число.
 */

const hash: Record<string, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

const hashDiff: Record<string, (a: string, b: string) => number> = {
    'IV': (a: string, b: string) => {
        return hash[b] - hash[a];
    },
    'IX': (a: string, b: string) => {
        return hash[b] - hash[a];
    },
    'XL': (a: string, b: string) => {
        return hash[b] - hash[a];
    },
    'XC': (a: string, b: string) => {
        return hash[b] - hash[a];
    },
    'CD': (a: string, b: string) => {
        return hash[b] - hash[a];
    },
    'CM': (a: string, b: string) => {
        return hash[b] - hash[a];
    }
}
// function romanToInt(s: string): number {
//     let sum: number = 0;
    
//     for (let i = 0; i < s.length;) {
//         const next = s[i + 1];
//         const key = s[i];
        
//         const pair = `${key}${next}`;
//         if (next && hashDiff[pair]) {
//             const diff = hashDiff[pair](key, next);
//             sum += diff;
//             i += 2;
//         } else {
//             sum += hash[key];
//             i += 1;
//         }

//     }

//     return sum;
// };
function romanToInt(s: string): number {
    let sum: number = 0;
    
    s = s.replace('IV', 'IIII').replace('IX', 'VIIII');
    s = s.replace('XL', 'XXXX').replace('XC', 'LXXXX');
    s = s.replace('CD', 'CCCC').replace('CM', 'DCCCC');

    for (let i = 0; i < s.length; i += 1) {
        sum += hash[s[i]];
    }
    return sum;
};

console.log('romanToInt', romanToInt('MCMXCIV')); // 1994
// console.log('romanToInt', romanToInt('III'));
// console.log('romanToInt', romanToInt('XXVII'));
// console.log('romanToInt', romanToInt('IV'));
// console.log('romanToInt', romanToInt('IX'));
// console.log('romanToInt', romanToInt('XL'));
// console.log('romanToInt', romanToInt('XC'));
// console.log('romanToInt', romanToInt('CD'));
// console.log('romanToInt', romanToInt('CM'));