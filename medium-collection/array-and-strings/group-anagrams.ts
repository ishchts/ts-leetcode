function groupAnagrams(strs: string[]): string[][] {
    const map: Record<string, string[]> = {};

    for (let i = 0; i < strs.length; i += 1) {
        const count = new Array(26).fill(0);
        for (let char of strs[i]) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        console.log('count', count);
        const key = count.join('#');  // создаем строковое представление счетчика

        if (map[key] === undefined) {
            map[key] = [];
        }
        map[key].push(strs[i]);
    }

    return Object.values(map);
}

const str: string[] = ["eat","tea","tan","ate","nat","bat"];

console.log('groupAnagrams', groupAnagrams(str));