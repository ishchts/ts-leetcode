function tribonacci(n: number): number {
    if (n === 0) {
        return 0;
    }

    if (n < 3) {
        return 1;
    }

    let t0: number = 0;
    let t1: number = 1;
    let t2: number = 1;

    let ans: number = 0;
    
    for (let i = 3; i <= n; i += 1) {
        ans = t2 + t1 + t0;
        t0 = t1;
        t1 = t2;
        t2 = ans;
    }

    return ans;
};

console.log(tribonacci(25));