function firstUniqChar(s: string): number {
    const map: Record<string, number> = {};

    for (let i = 0; i < s.length; i ++) {
        map[s[i]] = (map[s[i]] ?? 0) + 1;
    }

    for (let i = 0; i < s.length; i ++) {
        const letter = s[i];

        if (map[letter] === 1) {
            return i;
        }
    }

    return -1;
};

console.log('case1', firstUniqChar('leetcode'));
console.log('case2', firstUniqChar('loveleetcode'));
console.log('case3', firstUniqChar('aabb'));
console.log('case4', firstUniqChar('z'));
console.log('case5', firstUniqChar('dddccdbba'));
console.log('case6', firstUniqChar('dabc'));