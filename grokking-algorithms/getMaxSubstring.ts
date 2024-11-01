const getMaxSubstring = (str1: string, str2: string): number => {
    if (str1.length === 0 || str2.length === 0) {
        return 0;
    }

    const dp: number[][] = Array.apply(null, Array(str1.length)).map(() => new Array(str2.length).fill(0));
    let max: number = 0;
    for (let i = 1; i < dp.length; i += 1) {
        for (let j = 0; j < dp[i].length; j +=1) {
            if (str1[i] !== str2[j]) {
                continue;
            }
            if (dp[i - 1][j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1;
            }

            max = Math.max(dp[i][j], max);
        }
    }
    

    console.log('dp', dp);
    return max;
}

// console.log(getMaxSubstring('fish', 'hish'));
// console.log(getMaxSubstring('house', 'mouse')); // 4
console.log(getMaxSubstring('stand', 'hand')); // 3
// console.log(getMaxSubstring('','')); // 0
// console.log(getMaxSubstring('hello','')); // 0
// console.log(getMaxSubstring('','hello')); // 0
// console.log(getMaxSubstring('hello', 'world')); // 1
// console.log(getMaxSubstring('abcdef', 'axbxcxdx')); // 1
// console.log(getMaxSubstring('blue', 'clues')); // 3