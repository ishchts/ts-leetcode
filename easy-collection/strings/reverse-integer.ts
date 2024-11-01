function reverse(x: number): number {
    const min = -(2 ** 31);
    const max = (2 ** 31) - 1;

    const str = String(Math.abs(x));
    let result = '';

    for (let i = str.length - 1; i >= 0; i --) {
        console.log(str[i]);
        result += str[i];
    }

    return x > 0 
        ? Number(result) > max
            ? 0
            : Number(result)
        : -Number(result) < min
            ? 0
            : -Number(result);
};

console.log('case1', reverse(1534236469));