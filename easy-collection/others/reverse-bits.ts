// function reverseBits(n: number): number {
// 	let ans: string = '';
// 	for (let i = 0; i < 32; i += 1) {
// 		ans += n & 1;
// 		n = n >> 1;
// 	}

// 	return parseInt(ans, 2);
// };
function reverseBits(n: number): number {
	let res = 0;

    for (let i = 0; i < 32; i++) {
        res <<= 1;
        res += n & 1;
        n >>>= 1;
    }

     return res >>> 0;
};

console.log('reverseBits', reverseBits(4294967293));