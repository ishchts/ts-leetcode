// function getLongestSubsequence(words: string[], groups: number[]): string[] {
//     if (words.length < 2) {
//         return words;
//     }

//     let idx: number[] = [];
    
//     for (let i = 0; i < groups.length - 1; i += 1) {
//         const current = groups[i];
//         const nextIndex = i + 1;
//         const next = groups[i + 1];

//         if (current !== next) {
//             if (groups[idx[idx.length - 1]] !== groups[i]) {
//                 idx.push(i);
//             }
//             idx.push(nextIndex);
//         } else {
//             if (groups[idx[idx.length - 1]] !== groups[i]) {
//                 idx.push(i);
//             }
//         }
//     }
//     return idx.map((el) => words[el])
// };

function getLongestSubsequence(words: string[], groups: number[]): string[] {
    if (words.length < 2) {
        return words;
    }

    const idx: number[] = [0];

    for (let i = 1; i < groups.length; i += 1) {
        if (groups[i] !== groups[idx[idx.length - 1]]) {
            idx.push(i);
        }
    }
    return idx.map((el) => words[el]);
};


const words: string[] = ["e","a","b"];
const groups: number[] = [0,0,1];

console.log('getLongestSubsequence', getLongestSubsequence(words, groups));