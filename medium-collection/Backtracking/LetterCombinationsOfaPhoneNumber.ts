const mapping: Record<number, string[]> = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

function letterCombinations(digits: string): string[] {
    if (digits.length === 0) {
        return [];
    }

    const result: string[] = [];

   const iter = (index: number, tmp: string) => {
        if (tmp.length === digits.length) {
            result.push(tmp);
            return;
        }

        const letters = mapping[Number(digits[index])];

        for (let i = 0; i < letters.length; i += 1) {
            iter(index + 1, tmp + letters[i]);
        }

    }

    iter(0, '');
    return result; 
}

const digits = "23";

console.log('letterCombinations', letterCombinations(""));