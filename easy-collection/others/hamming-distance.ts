// function hammingDistance(x: number, y: number): number {
//     const xor = (x ^ y).toString(2);
//     let count: number = 0;
//     for (let i = 0; i < xor.length; i += 1) {
//         if (Number(xor[i]) === 1) {
//             count += 1;
//         }
//     }
//     return count;
// };

function hammingDistance(x: number, y: number): number {
    let count: number = 0;
    const xor = x ^ y;
    for (let i = 0; i < 32; i += 1) {
        count += (xor >> i) & 1
    }
    return count;
};

console.log('hammingDistance', hammingDistance(3, 1));