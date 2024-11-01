function longestPalindrome(s: string): string {
    const n = s.length;
    const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));
    
    let ans = '';

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        ans = s[i];
    }
    
    console.log('dp', dp);
    return '';
};

const s = "babad";
const s1 = "cbbd";

console.log(longestPalindrome(s));