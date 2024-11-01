function lengthOfLongestSubstring(s: string): number {
    let map: Record<string, number> = {};
    let left: number = 0;
    let result: number = 0;

    for (let right = 0; right < s.length; right += 1) {
        if (map[s[right]] !== undefined) {
            left = Math.max(map[s[right]] + 1, left);
        }

        map[s[right]] = right;
        result = Math.max(map[s[right]] - left + 1, result);
    }


    return result;
}

const str: string = "abba";

console.log('lengthOfLongestSubstring', lengthOfLongestSubstring(str));