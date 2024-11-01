function lengthOfLongestSubstring(s: string): number {
    let res = 0;
    let tmp = '';
    let map: Record<string, number> = {};

    for (let i = 0; i < s.length; i += 1) {
        const el: string = s[i];

        if (el in map) {
            res = Math.max(tmp.length, res);
            tmp = '';
            i = map[el];
            map = {};
        } else {
            tmp += el;
            map[el] = i;
        }
    }

    return Math.max(tmp.length, res);
};

const s = "abcabcbb";
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring(s));
