function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    const iter = (acc: number[], n: number[]): void => {
        if (acc.length === nums.length) {
            result.push(acc);
            return
        }

        for (let i = 0; i < n.length; i +=1) {
            const b = [...n.slice(0, i), ...n.slice(i + 1)];

            iter([...acc, n[i]], b);
        }
    }

    iter([], nums);
    
    return result;
}

const nums = [1,2,3];

console.log(permute(nums));


