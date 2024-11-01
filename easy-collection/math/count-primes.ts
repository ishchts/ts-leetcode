function countPrimes(n: number): number {
    if (n <= 2) {
        return 0;
    }

    const A: boolean[] = []
    for (let i = 0; i < n; i ++) {
        A.push(true)
    }
    A[0] = false;
    A[1] = false;

    for (let i = 2; i ** 2 <= n; i += 1) {
        if (A[i]) {
            for (let j = i ** 2; j <= n; j += i) {
                A[j] = false;
            }
        }
    }

    return A.filter((el) => el).length;
};

console.log('countPrimes', countPrimes(4));