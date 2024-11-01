function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) {
        return strs[0]
    }

    const [first, ...rest] = strs;
    let prefix = strs[0];

    for (let j = 0; j < rest.length; j ++) {
        const el = rest[j];
        let tmp = '';

        for (let i = 0; i < first.length; i ++) {
            if (first[i] !== el[i]) {
                if (prefix.length > tmp.length) {
                    prefix = tmp;
                }
                break;
            }

            tmp += first[i];
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["c","acc","ccc"]));
console.log(longestCommonPrefix(["flower","flow","flight"]));