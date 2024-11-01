// function isPowerOfThree(n: number): boolean {
//     return n > 0 && 1162261467 % n === 0
// };

function isPowerOfThree(n: number): boolean {
    if (n < 1) {
        return false;
    }

    while(n % 3 === 0) {
        n /= 3;
    }

    return n === 1;
};


console.log('isPowerOfThree', isPowerOfThree(27));